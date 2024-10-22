<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;

Route::get('/', function () {
    return view('welcome');
});
Route::get('/agregasion', [UserController::class, 'agregarUsuarioo']);

//->name('prueba');

