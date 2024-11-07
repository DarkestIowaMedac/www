<?php

namespace Database\Seeders;

use App\Models\Aula;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use App\Models\User;
use App\Models\Alumno;
use App\Models\Asientos;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        //Aula::factory(50)->create();


        //Alumno::factory(200)->create();

        Asientos::factory(9)->create();

        $asiento = new Asientos();
        $asiento -> disponibilidad = 1;
        $asiento -> id = 33;


        /*User::factory()->create([
            'name' => 'Test User',
            'email' => 'test@example.com',
        ]);*/
    }
}
