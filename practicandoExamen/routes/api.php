<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\transferencia;
use App\Http\Controllers\Api\AuthController;

Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/registrar', [AuthController::class, 'createUser']);
Route::post('/login', [AuthController::class, 'loginUser']);

Route::post('/transferencia', [transferencia::class, 'create'])->middleware(['auth:sanctum']);
Route::delete('/transferencia', [Transferencia::class, 'cancel']);
