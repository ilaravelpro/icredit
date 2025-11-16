<?php


/*
 * Author: Amir Hossein Jahani | iAmir.net
 * Last modified: 4/17/24, 9:18 AM
 * Copyright (c) 2020-2024. Powered by www.iamir.net
 */

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::smartCreate('credit_plans', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->bigInteger('creator_id')->nullable()->unsigned();
            $table->foreign('creator_id')->references('id')->on('users')->noActionOnDelete();
            $table->bigInteger('icon_id')->nullable()->unsigned();
            $table->foreign('icon_id')->references('id')->on('posts')->noActionOnDelete();
            $table->bigInteger('image_id')->nullable()->unsigned();
            $table->foreign('image_id')->references('id')->on('posts')->noActionOnDelete();
            $table->string('title')->nullable();
            $table->bigInteger('value')->nullable()->default(0);
            $table->bigInteger('amount')->nullable()->default(0);
            $table->string('type')->nullable()->default('balance');
            $table->string('currency')->nullable();
            $table->bigInteger('count_min')->nullable();
            $table->bigInteger('count_max')->nullable();
            $table->boolean('is_counting')->nullable()->default(0);
            $table->string('status')->default('active');
            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('credit_plans');
    }
};
