<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AsientosController;

Route::get('/', function () {
    return view('welcome');
});

Route::get('asiento', function () {
    return view('asiento');
});

Route::get('/guardar', [AsientosController::class, 'save']);
