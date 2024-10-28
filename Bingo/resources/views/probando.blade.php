<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    @vite(['resources/css/app.css', 'resources/js/app.js'])
</head>
<body>

    <div class="flex bg-red-950 w-1/2 h-1/2 gap-5 justify-center">
        <div class=" bg-green-400 gap-2">

            @for ($i=1, $cont=1; $i<=9; $i++)
                <div class="flex gap-1">
                @for ($j=0; $j<=9; $j++, $cont++)
                    <div class="text-center pt-1 rounded-full bg-slate-100 w-8">{{$cont}}</div>
                @endfor
                </div>
            @endfor
        </div>
        <div class="bg-blue-500">
            <div class="w-10 bg-yellow-500 rounded-2x1 text-center pt-3" id="contador"></div>
        </div>
    </div>
    <div id="contador">0</div>
    <div class="w-40 h-40 bg-yellow-500 rounded-2x1 text-center pt-16 text-3xl" id="de"></div>
    <button id="boton">Pulsar</button>
</body>
</html>