<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>

    @vite(['resources/css/app.css', 'resources/js/app.js'])


    <style>
        img{
            width: 50px
        }

        div{
            width: 150px
        }
    </style>

</head>
<body>

    <div class=" flex flex-row flex-wrap w">
        @foreach ($asientos as $asi)
            <a href="/public/asientos/{{$asi->id}}"><img src="/public/{{$asi->disponible}}.png" id="{{$asi->disponible}}"></a>
        @endforeach
    </div>

    <h1>Asientos ocupados: <span id="reservados">0</span></h1>

    <a href="/public/aleatorio"><button id="aleatorio" class="border-4  bg-red-300 p-3 border-red-900">Asiento Aleatorio</button></a>

    <br>
    <br>


    <div class=" flex flex-row flex-wrap w">
        @foreach ($asientos as $asi)
            @if ($asi->disponible == 1)
            <a href="/public/asientos/{{$asi->id}}"><img src="{{asset('1.png')}}"></a>
            @else
            <img src="{{asset('0.png')}}"></a>
            @endif
        @endforeach
    </div>

    <h1>Asientos ocupados: <span>{{$contador}}</span></h1>

    <a href="/public/aleatorio"><button id="aleatorio" class="border-4  bg-red-300 p-3 border-red-900">Asiento Aleatorio</button></a>


</body>
</html>