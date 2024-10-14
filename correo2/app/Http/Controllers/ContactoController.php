<?php

namespace App\Http\Controllers;

use App\Mail\ContactoMail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class ContactoController extends Controller
{
    function enviar(){
        Mail::to("raj0002@alu.medac.es")->send(new ContactoMail());
        dd("asdasdasd");
    }
}
