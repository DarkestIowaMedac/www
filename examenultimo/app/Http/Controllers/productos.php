<?php

namespace App\Http\Controllers;

use App\Models\Compra;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class productos extends Controller
{
    public function obtenerTodos(Request $request){
        $productos = Product::all();
        return response()->json($productos);
    }

    public function guardarCarrito(Request $request){
        $idUser  = Auth::id();
        $productosIds = $request->input('idProducts'); // Asegúrate de que el input sea un array
        foreach ($productosIds as $idProduct) {
            $compra = new Compra();
            $compra->idUser  = $idUser ;
            $compra->idProduct = $idProduct;
            $compra->save();
        }
        return response()->json(['status' => 'ok']);
    }

    public function obtenerCarrito(Request $request){
        $idUser = Auth::id();
        $productos = Compra::where('idUser',$idUser)->get();
        return response()->json($productos);
    }

    public function eliminarCompra(Request $request){
    $idUser  = Auth::id();
    $productosIds = $request->input('idProducts'); // Asegúrate de que el input sea un array
    // Eliminar las compras que coincidan con los criterios
    Compra::whereIn('idProduct', $productosIds)
           ->where('idUser', $idUser )
           ->delete();
    return response()->json(['status' => 'oka']);
    }
}
