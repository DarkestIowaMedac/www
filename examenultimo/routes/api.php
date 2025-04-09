<?php

use Illuminate\Http\Request;
use App\Http\Controllers\productos;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\AuthController;

Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/todos', [productos::class, 'obtenerTodos']);
Route::post('/compra', [productos::class, 'guardarCarrito'])->middleware(['auth:sanctum']);
Route::get('/compra', [productos::class, 'obtenerCarrito'])->middleware(['auth:sanctum']);
Route::delete('/compra', [productos::class, 'eliminarCompra'])->middleware(['auth:sanctum']);


Route::post('/registrar', [AuthController::class, 'createUser']);
Route::post('/login', [AuthController::class, 'loginUser']);