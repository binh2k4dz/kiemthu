<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('page_general', function (Blueprint $table) {
            $table->id();
            $table->string('logo')->nullable();
            $table->string('app_name')->default('EgaGear');
            $table->string('welcome')->default('Free Shipping for all Order of $99');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('page_general');
    }
};
