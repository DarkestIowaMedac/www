<?php

namespace App\Http\Controllers;

use App\Models\fichaje;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class fichajeController extends Controller
{
    //Actualmente
    public function create (Request $request){
        $fichaje = new fichaje();
        $fichaje->tipo = $request["tipo"];
        $fichaje->fecha=now();
        $fichaje->idUsuario= cd Auth::id(); //No sé hacer para que me coja el User
        // ? Bearer token??????
        $fichaje->save();
        return response()->json(["status"=>"ok"], 201);
    }

    //Actualmente obtiene la info de un fichaje por id
    public function obtener (Request $request){
        $fichaje = fichaje::where("id",$request["idFichaje"])->first();
        return response()->json(["status"=>"ok", "66"=>$fichaje],200);
    }

    //Actualmente borra por id
    public function borrar (Request $request){
        $fichaje = fichaje::where("id",$request["idFichaje"])->first();
        $fichaje->delete();
        return response()->json(["status"=>"ok"],201);
    }

    //Actualmente actualizar por id a un tipo específico
    public function actualizar (Request $request){
        $fichaje = fichaje::where("id",$request["idFichaje"])->first();
        $fichaje->tipo = $request["tipo"];
        $fichaje->save();
    }
}
