<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ControladorController;
use App\Http\Controllers\UsuariosController;

Route::get('/', function () {
    return view('welcome');
});


Route::get('/registro', [UsuariosController::class, 'registro']);