<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Correo extends Model
{
    use HasFactory;

    protected $table = 'users';

    protected $fillable = ['Nombre', 'Apellido', 'Teléfono', 'Mensaje'];
}
