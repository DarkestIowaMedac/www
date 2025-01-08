<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Ramsey\Uuid\Converter\Number\GenericNumberConverter;

class FormuController extends Controller
{
    //
    public function mostrarFormulario(){
        return view("formu");
    }

    public function agregarDatos(Request $request){
        $dni = $request['dni'];
        $password = $request['password'];


        $consulta = "INSERT INTO `users` (`dni`, `password`) VALUES ('".$dni."', '".$password."');";
        $seintroduce = true;
        $numeros = "";
        if(strlen($password) < 8){
            $seintroduce = false;
        }
        if(strlen($dni) != 9){
            $seintroduce = false;
        }
        else{

            for ($i = 0; $i<8; $i++){
                $numeros = $numeros."". $dni[$i];
            }
        }

        $numeros = intval($numeros);
        $resto = $numeros%23;
        $letrasDNI = "TRWAGMYFPDXBNJZSQVHLCKE";
        $resto = $letrasDNI[$resto];
        if($resto != $dni[8]){
            $seintroduce = false;
        }

        if($seintroduce == false){
            $validacion = "Los datos no se han insertado, datos incorrectos";

        }
        else{
            DB::table('datos')->insert(["dni"=>$dni, "password"=>$password]);
            $validacion = "Los datos se han insertado correctamente";
        }

    // }
    // else{
    //
    // }
        return view("formu")->with(["validacion"=>$validacion]);
    }
}
