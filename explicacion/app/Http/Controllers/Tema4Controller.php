<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

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


        $consulta = "SELECT * FROM correos";

       // $datos = mysqli_query($conexion, $consulta);

        $emails = [];
        $pass = [];
        $uservalidado = false;
       // while ($row = mysqli_fetch_array($datos)){
       //     array_push($emails, $row["email"]);//row["nombre"]
       //     array_push($pass, $row["nombre"]);
      //  }


        for($i = 0; $i < count($emails); $i++){
            if($emails[$i] == $correo && $pass[$i] == $contraseña){
                $uservalidado = true;
            }
        }

        return view("tema4_4")->with(["validacion"=>$uservalidado]);


    }

}


