<?php


/**
 * Author: Amir Hossein Jahani | iAmir.net
 * Last modified: 9/17/20, 5:52 PM
 * Copyright (c) 2020. Powered by iamir.net
 */

Route::namespace('v1')->prefix('v1')->group(function() {
    Route::group(['middleware' => ['auth:api']], function () {
        if (icredit('routes.api.status')) {
            Route::apiResource('credits', 'CreditController', ['as' => 'api']);
            Route::apiResource('credits/{record}/changes', 'CreditController', ['as' => 'api.credits']);
            Route::apiResource('credit_plans', 'CreditPlanController', ['as' => 'api']);
            Route::post('credit_plans/{record}/pay', 'CreditPlanController@toPay')->name('api.credit_plans.pay');
        }
    });
});
Route::namespace('v1')->prefix('v1')->group(function () {

});
