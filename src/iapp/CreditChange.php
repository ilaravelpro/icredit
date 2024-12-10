<?php
/*
 * Author: Amir Hossein Jahani | iAmir.net
 * Last modified: 4/17/24, 9:18 AM
 * Copyright (c) 2020-2024. Powered by www.iamir.net
 */

namespace iLaravel\iCredit\iApp;

class CreditChange extends \iLaravel\Core\iApp\Model
{
    use \Illuminate\Database\Eloquent\SoftDeletes;
    public static $s_prefix = 'CRC';
    public static $s_start = 24300000;
    public static $s_end = 728999999;

    public $with_resource_data = ['credit'];
    public function creator()
    {
        return $this->belongsTo(imodal('User'));
    }

    public function credit()
    {
        return $this->belongsTo(imodal('Credit'));
    }

    public function rules($request, $action, $arg1 = null, $arg2 = null) {
        $rules = [];
        switch ($action) {
            case 'store':
            case 'update':
                $rules = array_merge($rules, [
                    'value' => 'required|numeric',
                    'amount' => 'required|numeric',
                    'is_decrease' => 'nullable|boolean',
                    'currency' => 'nullable|string',
                    'description' => 'nullable|string',
                    'status' => 'nullable|in:' . join( ',', iconfig('status.credit_changes', iconfig('status.global'))),
                ]);
                break;
        }
        return $rules;
    }
}
