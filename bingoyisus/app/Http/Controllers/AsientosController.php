<?php

namespace App\Http\Controllers;

use App\Models\Asientos;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class AsientosController extends Controller
{
    function asientos(){

        $asientos = Asientos::all();
        $asientosOcupados = Asientos::where('disponible',1)->count();

        return view('asientos')->with(['asientos' => $asientos, 'contador' => $asientosOcupados]);
    }

    function aleatorio(){

        $asientos = Asientos::all();

        $asiento = Asientos::where("disponible",0)->first();
        $asiento -> save();

        return view('asientos')->with(['asientos' => $asientos]);
    }

    function reservar($i){
        $asientosOcupados = Asientos::where('disponible',1)->count();


        $asientos = Asientos::all();
        $asiento = Asientos::where("id",$i)->first();
        $asiento -> disponible = 0;
        $asiento -> save();

        return view('asientos')->with(['asientos' => $asientos, 'contador' => $asientosOcupados]);

        $asiento = Asiento::withTrashed()->where('id',0)->first(); // te pilla también los asientos borrados
        //también en modelo y en migración

    }

}
