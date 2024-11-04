<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Asientos;

class AsientosSeeder extends Seeder
{
    public function run()
    {
        // Crear 150 asientos (10 filas x 15 columnas)
        for ($fila = 1; $fila <= 10; $fila++) {
            for ($columna = 1; $columna <= 15; $columna++) {
                Asientos::factory()->create([
                    'fila' => $fila,
                    'columna' => $columna,
                ]);
            }
        }
    }
}