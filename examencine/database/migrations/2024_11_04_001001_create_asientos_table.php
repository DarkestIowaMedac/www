<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAsientosTable extends Migration
{
    public function up()
    {
        Schema::create('asientos', function (Blueprint $table) {
            $table->id();
            $table->integer('fila');
            $table->integer('columna');
            $table->boolean('ocupado')->default(false);
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('asientos');
    }
}