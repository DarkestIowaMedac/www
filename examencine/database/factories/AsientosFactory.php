<?php

namespace Database\Factories;

use App\Models\Asientos;
use Illuminate\Database\Eloquent\Factories\Factory;

class AsientosFactory extends Factory
{
    protected $model = Asientos::class;

    public function definition()
    {
        return [
            'fila' => $this->faker->numberBetween(1, 10),
            'columna' => $this->faker->numberBetween(1, 15),
            'ocupado' => $this->faker->boolean(30), // 30% de probabilidad de estar ocupado
        ];
    }
}