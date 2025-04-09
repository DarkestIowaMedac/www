<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Modelo;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class transferencia extends Controller
{
    public function create (Request $request){
        $transferencia = new Modelo();
        $transferencia->idUsuarioIngresor = Auth::id();
        $transferencia->idUsuarioRecibidor = $request["idRecibidor"];
        $transferencia->cantidad = $request["cantidad"];



        $usuarioIngresor = User::find(Auth::id());
        $usuarioRecibidor = User::find($request->idRecibidor);

        if ($usuarioIngresor->dinero <= $request->cantidad) {
            return response()->json([
                'status' => false,
                'message' => 'No tienes suficiente dinero para la transferencia.'
            ], 400);
        }
        else if(Auth::id() == $request->idRecibidor){
            return response()->json([
                'status' => false,
                'message' => 'No puedes transferirte a ti mismo'
            ], 400);
        }
        else{
            $transferencia->save();
        }

        $usuarioIngresor->dinero -= $request->cantidad;
        $usuarioIngresor->save();
        $usuarioRecibidor->dinero += $request->cantidad;
        $usuarioRecibidor->save();
        return response()->json(["status"=>"ok"], 201);
    }


    //HECHO POR CHAT GPT
    public function cancel(Request $request)
    {

        // Validar que se envíe el ID de la transferencia
        $request->validate([
            'transferencia_id' => 'required|exists:transferencias,id', // Asegúrate de que el ID exista en la tabla de transferencias
        ]);

        // Buscar la transferencia por ID
        $transferencia = Modelo::find($request->transferencia_id);

        // Obtener los usuarios involucrados
        $usuarioIngresor = User::find($transferencia->idUsuarioIngresor);
        $usuarioRecibidor = User::find($transferencia->idUsuarioRecibidor);

        // Verificar si los usuarios existen
        if (!$usuarioIngresor || !$usuarioRecibidor) {
            return response()->json([
                'status' => false,
                'message' => 'Usuario(s) involucrado(s) no encontrado(s).'
            ], 404);
        }

        //Solo puede cancelar quien ha hecho la transferencia
        if (Auth::id() !== $transferencia->idUsuarioIngresor) {
            return response()->json([
                'status' => false,
                'message' => 'No tienes permiso para anular esta transferencia.'
            ], 403); // 403 Forbidden
        }

        // Revertir los saldos
        $usuarioIngresor->dinero += $transferencia->cantidad; // Devolver la cantidad al ingresor
        $usuarioRecibidor->dinero -= $transferencia->cantidad; // Restar la cantidad al receptor
        $usuarioIngresor->save();
        $usuarioRecibidor->save();

        // Eliminar la transferencia
        $transferencia->delete();
        return response()->json([
            'status' => true,
            'message' => 'Transferencia anulada exitosamente.'
        ], 200);
    }
}
