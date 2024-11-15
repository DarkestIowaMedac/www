<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class AsientosController extends Controller
{
    //
    public function save(Request $request){
        $nombre = $request["nombre"];
        $apellidos = $request["apellido"];
        $data = [$nombre, $apellidos];
        //luego con requestdata se extraen todos los datos
        $validator = Validator::make($data,
        [
            'nombre' => 'required|max:100|string',
            'apellidos' => 'required|max:100|string'
        ],
        ['nombre.required' =>  'El nombre es obligatorio. ']);

        if($validator->fails()){
            dd("No es válido");
        }
        else{
            dd("SISOY");
        }

        toastr()->error("Error en el nombre");
        toastr()->success("que wen nombre tieneh crack");
        return redirect('/asiento')->withErrors($validator);
    }

    //Index, store, update, destroy
    public function rules(){
        $rules = [
            'nombre' => 'required|max:100|string',
            'direccion' => 'required|string|max:150',
            'idTipo' => 'required|integer|exists:App\Models\TipoCentro,id',
            'logo' => 'nullable|max:1000|mimes:pnj,jpg,jpeg',
        ];

        $rules_message = [
            // Mensajes error nombre
            'nombre.required' =>  'El nombre es obligatorio. ',
            'nombre.string' => 'El nombre no puede fcontener números ni caracteres especiales',
            'nombre.max' => 'El nombre no puede exceder los 100 caracteres.',
        ];
    }


}
//"composer require php-flasher/flasher-toastr-laravel
//php artisan flasher:install


//Salacontroller:
/*
    $s1 = new Sala();

    $s1['nombre']="Sala1";

    
*/
