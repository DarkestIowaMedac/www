<?php

use App\Http\Controllers\AsientosController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AulaController;

Route::get('/', function () {
    return view('index');
});


Route::get('/probando', function () {
    return view('probando');
});


Route::get('/aula/{i}', [AulaController::class, 'index']);

Route::get('/asientos/{i}', [AsientosController::class, 'reservar']);


Route::get('/asientos', [AsientosController::class, 'asientos']);
Route::get('/aleatorio', [AsientosController::class, 'aleatorio']);
