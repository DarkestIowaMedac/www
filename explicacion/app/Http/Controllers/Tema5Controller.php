<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class Tema5Controller extends Controller
{
    function esPrimo(Request $request){

        $numero = $request['numero'];


        for($i = 2; $i < $numero; $i++){
            if($numero%$i == 0){
                return view("tema5")->with(["comprobar"=>false]);
            }
        }

        return view("tema5")->with(["comprobar"=>true]);


    }
}
