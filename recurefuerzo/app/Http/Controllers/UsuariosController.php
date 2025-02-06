<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class UsuariosController extends Controller
{
    public function registro(Request $request){
        $dni = $request['dni'];
        $password = $request['password'];
        $validacion = false;
        if(strlen($dni) == 9){
            $tablaLetras = 'TRWAGMYFPDXBNJZSQVHLCKE';
            $numeros = "";
            for ($i = 0; $i < 8; $i++){
               $numeros = $numeros . $dni[$i]; 
            }
            $numeros = intval($numeros);
            $resto = $numeros%23;
            if($tablaLetras[$resto] == $dni[8] && (strlen($password) >= 8)){
                $validacion = true;
            }
        }
        if($validacion == true){
            $validacion = "Los datos se han insertado correctamente";
            DB::table('users')->insert(["dni"=>$dni, "password"=>$password]);
        }
        else{
            $validacion = "Los datos no se han insertado, datos incorrectos";
        }
        return view("registro")->with(["validacion"=>$validacion]);
    }

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
