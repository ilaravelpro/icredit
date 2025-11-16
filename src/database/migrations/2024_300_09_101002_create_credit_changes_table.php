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
        Schema::smartCreate('credit_changes', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->bigInteger('creator_id')->nullable()->unsigned();
            $table->foreign('creator_id')->references('id')->on('users')->noActionOnDelete();
            $table->bigInteger('credit_id')->nullable()->unsigned();
            $table->foreign('credit_id')->references('id')->on('credits')->noActionOnDelete();
            $table->string('number')->nullable();
            $table->string('modal')->nullable();
            $table->bigInteger('modal_id')->nullable();
            $table->bigInteger('value')->nullable();
            $table->bigInteger('amount')->nullable();
            $table->boolean('is_decrease')->nullable();
            $table->string('currency')->nullable();
            $table->text('description')->nullable();
            $table->string('status')->default('draft');
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
        Schema::dropIfExists('credit_changes');
    }
};
