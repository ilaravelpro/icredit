<?php
/*
 * Author: Amir Hossein Jahani | iAmir.net
 * Last modified: 4/17/24, 9:18 AM
 * Copyright (c) 2020-2024. Powered by www.iamir.net
 */

namespace iLaravel\iCredit\iApp;


class Credit extends \iLaravel\Core\iApp\Model
{
    use \Illuminate\Database\Eloquent\SoftDeletes;
    public static $s_prefix = 'CR';
    public static $s_start = 24300000;
    public static $s_end = 728999999;

    public function creator()
    {
        return $this->belongsTo(imodal('User'));
    }
    public function changes()
    {
        return $this->hasMany(imodal('CreditChange'), 'credit_id');
    }
    public function rules($request, $action, $arg1 = null, $arg2 = null) {
        $rules = [];
        switch ($action) {
            case 'store':
            case 'update':
                $rules = array_merge($rules, [
                    'value' => "required|numeric",
                    'amount' => 'required|numeric',
                    'type' => 'nullable|string|in:balance,baarbarg',
                    'currency' => 'nullable|string|in:IRT',
                    'status' => 'nullable|in:' . join( ',', iconfig('status.credits', iconfig('status.global'))),
                ]);
                break;
        }
        return $rules;
    }
}
