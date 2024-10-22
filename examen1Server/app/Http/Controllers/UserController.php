<?php

namespace App\Http\Controllers;

use App\Models\Correo;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class UserController extends Controller
{
    function agregarUsuarioo(Request $request){
    $nombre = $request['nombre'];
    $apellido = $request['apellido'];
    $telefono = $request['telefono'];
    $mensaje = $request['mensaje'];
    if($nombre == null){
        return view("indea");
    }
    $consulta = "INSERT INTO `users` (`Nombre`, `Apellido`, `Teléfono`, `Mensaje`) VALUES ('".$nombre."', '".$apellido."', '".$telefono."', '".$mensaje."');";


    $validacion = false;

    if(strlen($nombre)>3 && strlen($apellido)>3 && strlen($telefono)>10 && strlen($mensaje)>3){
    $validacion = "Los datos se han insertado correctamente";
    DB::table('users')->insert(["nombre"=>$nombre, "apellido"=>$apellido, "teléfono"=>$telefono,"mensaje"=>"$mensaje"]);
    }
    else{
        $validacion = "Los datos no se han insertado, datos incorrectos";
    }

    return view("indea")->with(["validacion"=>$validacion]);
    }

}
