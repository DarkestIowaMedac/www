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
        Schema::create('transferencias', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->unsignedBigInteger('idUsuarioIngresor');
            $table->foreign('idUsuarioIngresor')->references('id')->on('users');
            $table->unsignedBigInteger('idUsuarioRecibidor');
            $table->foreign('idUsuarioRecibidor')->references('id')->on('users');
            $table->decimal('cantidad', 8, 2);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('transferencias');
    }
};

