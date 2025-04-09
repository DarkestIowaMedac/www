<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\fichajeController;
use App\Http\Controllers\Api\AuthController;

Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/registrar', [AuthController::class, 'createUser']);

Route::post('/fichar', [fichajeController::class, 'create'])->middleware(['auth:sanctum']);
Route::get('/fichajes', [fichajeController::class, 'obtener'])->middleware(['auth:sanctum']);
Route::delete('/borrarfichaje', [fichajeController::class, 'borrar'])->middleware(['auth:sanctum']);
Route::put('/actualizarfichaje', [fichajeController::class, 'actualizar'])->middleware(['auth:sanctum']);
