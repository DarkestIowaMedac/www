<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Asientos;

class AsientosController extends Controller
{
    public function mostrarSala()
    {
        $asientos = Asientos::orderBy('fila')->orderBy('columna')->get();
        return view('sala', compact('asientos'));
        // Es equivalente a return view('sala', ['asientos' => $asientos]);
        //compact se usa más a menudo cuando hay muchas variables a pasar y sus nombres en vista 'asientos' coincide
        //con el nombre de la variable $asientos. sería compact ('variable1', 'variable2')
    }
}
