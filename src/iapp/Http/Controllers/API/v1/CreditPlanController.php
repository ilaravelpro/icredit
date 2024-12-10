<?php


/*
 * Author: Amir Hossein Jahani | iAmir.net
 * Last modified: 4/17/24, 9:18 AM
 * Copyright (c) 2020-2024. Powered by www.iamir.net
 */

namespace iLaravel\iCredit\iApp\Http\Controllers\API\v1;


use iLaravel\Core\iApp\Exceptions\iException;
use iLaravel\Core\iApp\Http\Requests\iLaravel as Request;

class CreditPlanController extends \iLaravel\Core\iApp\Http\Controllers\API\ApiController
{
    public function toPay(Request $request, $record)
    {
        if ($record = $this->model::findBySerial($record)) {
            $payment = imodal('Payment')::findBySerial($request->payment_id)?:imodal('Payment')::where('status', 'active')->first();
            $result = \iLaravel\iPayment\Vendor\PaymentService::send($record, $record->amount * $request->count, ['count' => $request->count], $payment);
            if ($result['status']) {
                $this->statusMessage = 'لینک پرداخت با موفقیت ایجاد گردید.';
                return ['data' => $result];
            } else throw new iException($result['message']);
        } else
            throw new iException('اطلاعاتی یافت نشد.');
    }
}
