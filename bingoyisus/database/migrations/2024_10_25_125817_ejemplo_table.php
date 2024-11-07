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
        //función para crear una tabla ejemplo
        Schema::create('ejemplo', function(Blueprint $table){
            
            //estas son las columnas
            $table -> id();
            $table -> string('name');
            $table -> date('fecha_nacimiento');
            $table -> integer('numero_pie'); //añadimos esta linea

            $table -> timestamps(); //te genera cuando se ha creado y cuando se ha actualizado
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        //busca si hay una tabla ejemplo, y si la hay la elimina
        Schema::dropIfExists('ejemplo');
    }
};
