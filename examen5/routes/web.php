<?php


use App\Http\Controllers\controlador;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/ruta1', [controlador::class, 'controlador1']);
Route::get('/ruta2/modificar/{id}', [controlador::class, 'controlador2']);
Route::get('/sala/reservaraleatorio', [controlador::class, 'aleatorio']);
