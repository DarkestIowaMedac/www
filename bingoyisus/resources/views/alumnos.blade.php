<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <h1>Aula nº:{{$aula->id}} | {{$aula->nombre}}</h1> 

    @foreach ($aula->alumnos as $alu)
        <h2>{{$alu->nombre}}</h2>
    @endforeach

</body>
</html>