<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Asientos extends Model
{
    use HasFactory;
    protected $table = "asientos"; //para indicar el nombre de la tabla, no pasa nada
    //si es el plural del nombre del modelo en inglés y se puede omitir

    protected $primary = "id"; //por defecto será id, por lo que es omitible si id es nuestra primary
    
    protected $fillable = ['fila', 'columna', 'ocupado'];
}
