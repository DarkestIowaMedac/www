<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Modelo extends Model
{
    protected $table = 'transferencias';
    protected $fillable = [
        'fecha',
        'idUsuarioIngresor',
        'idUsuarioRecibidor',
        'cantidad',
    ];
}
