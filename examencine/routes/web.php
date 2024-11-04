<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AsientosController;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/sala', [AsientosController::class, 'mostrarSala']);