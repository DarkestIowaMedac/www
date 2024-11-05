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
        return view('sala', compact('asientos','ocupados'));
        // Es equivalente a return view('sala', ['asientos' => $asientos]);
        //compact se usa más a menudo cuando hay muchas variables a pasar y sus nombres en vista 'asientos' coincide
        //con el nombre de la variable $asientos. sería compact ('variable1', 'variable2')
    }

    public function reservar($i){
        $asiento = Asientos::where('id',$i)->first();
        if ($asiento->ocupado == true){
            $asiento->ocupado = false;
        }
        else{
        $asiento->ocupado=true;
        }
        $asiento->save();
        return redirect('/sala');
    }

    public function aleatorio(){
        $ocupados = Asientos::where('ocupado',false)->get();
        $aleatorio = rand(0, $ocupados->count() - 1);
        $asientoaleatorio = $ocupados[$aleatorio];
        $asientoaleatorio->ocupado=true;
        $asientoaleatorio->save();
        return redirect('/sala');
    }

}
