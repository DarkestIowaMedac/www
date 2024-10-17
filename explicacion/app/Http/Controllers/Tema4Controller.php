<?php

namespace App\Http\Controllers;

use App\Models\Correo;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class Tema4Controller extends Controller
{
    function esPrimo(Request $request){

        $numero = $request['primo'];
        if($numero == null){
            return view("tema4_1");
        }
        else{
            $esprimo = true;

        for($i = 2; $i < $numero; $i++){
            if($numero%$i == 0){
                $esprimo = false;
                break;
            }
        }

        return view("tema4_1")->with(["primo"=>$esprimo]);
        }

    }

    function esBisiesto(Request $request){

        $numero = $request['bisiesto'];

        if($numero == null){
            return view("tema4_2");
        }
        else{
            $esbisiesto = false;
            if((($numero%4 == 0 && $numero%100 != 0) || $numero%400 == 0)&&$numero!=0){
                $esbisiesto = true;
            }
        }
        return view("tema4_2")->with(["bisiesto"=>$esbisiesto]);
    }

    function fibonacci(Request $request){

        $numero = $request['fibonacci'];
        if($numero == null){
            return view("tema4_3");
        }
        $arrsolucion = [];
        if($numero >= 1){
            array_push($arrsolucion, 0);
        }
        if($numero >= 2){
            array_push($arrsolucion, 1);
        }
        for($i = 2; $i < $numero; $i++){
            $suma = $arrsolucion[count($arrsolucion)-1] + $arrsolucion[count($arrsolucion)-2];
            array_push($arrsolucion, $suma);
        }
        $arrstring = join(", ", $arrsolucion);
        return view("tema4_3")->with(["fibonacci"=>$arrstring]);

    }

    function existeUsuario(Request $request){

        $correo = $request['email'];
        $contraseña = $request['password'];
        if($correo == null){
            return view("tema4_4");
        }
        // Use Eloquent to query the database
        $correos = Correo::where('email', $correo)->where('contraseña', $contraseña)->get();

        $uservalidado = $correos->count() > 0; // check if there's at least one matching record


        return view("tema4_4")->with(["validacion"=>$uservalidado]);

    }

    function agregarUsuario(Request $request){

        $nombre = $request['nombre'];
        $apellido = $request['apellido'];
        $telefono = $request['telefono'];
        $mensaje = $request['mensaje'];
        if($nombre == null){
            return view("indece");
        }
        $consulta = "INSERT INTO `users` (`Nombre`, `Apellido`, `Teléfono`, `Mensaje`) VALUES ('".$nombre."', '".$apellido."', '".$telefono."', '".$mensaje."');";


        $validacion = false;

        if(strlen($nombre)>3 && strlen($apellido)>3 && strlen($telefono)>10 && strlen($mensaje)>3){
        $validacion = "Los datos se han insertado correctamente";
        DB::table('users')->insert(["nombre"=>$nombre, "apellido"=>$apellido, "telefono"=>$telefono,"mensaje"=>"$mensaje"]);
        }
        else{
            $validacion = "Los datos no se han insertado, datos incorrectos";
        }



        return view("indece")->with(["validacion"=>$validacion]);
        }
}


