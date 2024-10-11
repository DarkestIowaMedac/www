<?php

use App\Models\User;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\Tema5Controller;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/intento1', function () {
    echo('hola');
});

Route::get('/intento2', function () {
    $usuarios = User::all();
    return view('welcome')->with(['users'=>$usuarios]);
});

Route::get('/intento3', [UserController::class, 'create']); //En la forma corta
Route::get('/intento4', [UserController::class, 'prueba']); //En la forma corta
Route::get('/esPrimo', [Tema5Controller::class, 'esPrimo']); // ccc
