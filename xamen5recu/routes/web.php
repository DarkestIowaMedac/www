<?php

use App\Http\Controllers\FormuController;
use Illuminate\Support\Facades\Route;

// Route::get('/', function () {
//     return view('welcome');
// });
Route::get('/registro', [FormuController::class, 'mostrarformulario']);
Route::post('/agregarDatos', [FormuController::class, 'agregarDatos']);


