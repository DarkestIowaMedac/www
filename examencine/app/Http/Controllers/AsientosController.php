<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Asientos;

class AsientosController extends Controller
{
    public function mostrarSala()
    {
        $asientos = Asientos::orderBy('fila')->orderBy('columna')->get();
        $ocupados = Asientos::where('ocupado',1)->count();
        return view('sala', compact('asientos'));
        // Es equivalente a return view('sala', ['asientos' => $asientos]);
        //compact se usa más a menudo cuando hay muchas variables a pasar y sus nombres en vista 'asientos' coincide
        //con el nombre de la variable $asientos. sería compact ('variable1', 'variable2')
    }

    function reservar($i){
        $asiento = Asientos::where('id',$i)->first();
        $asiento->disponibilidad=1;
        $asiento->save();
    }

    function anular($i){
        $asiento = Asientos::where('id',$i)->first();
        $asiento->disponibilidad=0;
        $asiento->save();
        // $asiento->delete();
    }
}
