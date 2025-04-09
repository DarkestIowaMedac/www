<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class fichaje extends Model
{
    protected $table = 'fichajes';
    protected $fillable = [
        'tipo',
        'fecha',
        'idUsuario',
    ];
}
