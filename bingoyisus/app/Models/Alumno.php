<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Alumno extends Model
{

    use HasFactory;

    protected $table = "alumno";

    protected $primary = "id";

    protected $fillable = [
        'nombre',
        'apellidos',
        'email',
        'password',

        "idaula"
    ];

    function aula(){
        return $this->belongsTo(Aula::class, 'idaula');
    }

}
