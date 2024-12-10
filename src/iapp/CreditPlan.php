<?php
/*
 * Author: Amir Hossein Jahani | iAmir.net
 * Last modified: 4/17/24, 9:18 AM
 * Copyright (c) 2020-2024. Powered by www.iamir.net
 */

namespace iLaravel\iCredit\iApp;


class CreditPlan extends \iLaravel\Core\iApp\Model
{
    use \Illuminate\Database\Eloquent\SoftDeletes;
    public static $s_prefix = 'CRP';
    public static $s_start = 24300000;
    public static $s_end = 728999999;

    public $files = ['image', 'icon'];
    public function creator()
    {
        return $this->belongsTo(imodal('User'));
    }

    public function payment_callback($transaction, &$response, $provider) {
        if ($response['status']) {
            $value = $this->value * ($this->is_counting ? $transaction->meta['count'] : 1);
            $transaction->creator->{$this->type . "_credit"} += $value;
            $transaction->creator->save();
            $credit = imodal('Credit')::where('creator_id', $transaction->creator_id)->where('type', $this->type)->first()?
                :imodal('Credit')::updateOrCreate(['creator_id' => $transaction->creator_id, 'type' => $this->type], ['value' => 0]);
            $credit->value += $value;
            $credit->amount += $transaction->amount;
            $credit->save();
        }
        $response['redirect_method'] = 'GET';
        $response['redirect_uri'] = asset('my' . $this->type);
    }
    public function rules($request, $action, $arg1 = null, $arg2 = null) {
        $rules = [];
        $additionalRules = [
            'image_file' => 'nullable|mimes:jpeg,jpg,png,gif|max:5120',
            'icon_file' => 'nullable|mimes:jpeg,jpg,png,gif|max:5120',
        ];
        switch ($action) {
            case 'store':
            case 'update':
                $rules = array_merge($rules, [
                    'title' => "required|string",
                    'value' => "required|numeric",
                    'amount' => 'required|numeric',
                    'type' => 'nullable|string|in:balance,baarbarg',
                    'currency' => 'nullable|string|in:IRT',
                    'count_min' => 'nullable|numeric',
                    'count_max' => 'nullable|numeric',
                    'is_counting' => 'nullable|boolean',
                    'status' => 'nullable|in:' . join( ',', iconfig('status.credit_plans', iconfig('status.global'))),
                ], $additionalRules);
                break;
            case 'additional':
                $rules = $additionalRules;
                break;
        }
        return $rules;
    }
}
