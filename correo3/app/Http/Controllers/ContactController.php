<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class ContactController extends Controller
{
    public function show()
    {
        return view('contact');
    }

    public function submit(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|max:255',
            'email' => 'required|email|max:255',
            'message' => 'required',
        ]);

        try {
            Mail::raw("Nombre: {$validated['name']}\nEmail: {$validated['email']}\nMensaje: {$validated['message']}", function ($message) use ($validated) {
                $message->to(config('mail.from.address'))
                        ->subject('Nuevo mensaje de contacto')
                        ->from($validated['email'], $validated['name']);
            });

            return back()->with('success', '¡Gracias por tu mensaje! Te contactaremos pronto.');
        } catch (\Exception $e) {
            return back()->with('error', 'Lo sentimos, hubo un problema al enviar tu mensaje. Por favor, inténtalo de nuevo más tarde.');
        }
    }
}