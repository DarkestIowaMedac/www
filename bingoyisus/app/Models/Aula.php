<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Aula extends Model
{

    use HasFactory;

    protected $table = "aula";

    protected $primary = "id";

    protected $fillable = [
        'nombre',
        'capacidad'
    ];

    function alumnos(){
        return $this->hasMany(Alumno::class, 'idaula');
    }

}
