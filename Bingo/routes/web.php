<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\CartonController;

Route::get('/', function () {
    return view('welcome');
});
Route::get('/bingo', [UserController::class, 'bingoide']);

Route::get('/carton', [CartonController::class, 'guardar']);
