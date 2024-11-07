<?php

namespace App\Http\Controllers;

use App\Models\Aula;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class AulaController extends Controller
{
    function index($i){

        $aula = Aula::where("id",$i)->first();

        return view('alumnos')->with(['aula' => $aula]);
    }
}
