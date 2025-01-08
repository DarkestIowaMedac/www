<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sala de Cine</title>
    @vite(['resources/css/sala.css','resources/js/app.js'])
</head>
<body>
    <h1>Sala de Cine</h1>
    <div class="sala">

        <form action="/examencine/public/sala/reservar/{{ $asiento->id }}">
             
            <input class="asiento {{ $asiento->ocupado ? 'ocupado' : 'disponible' }}" type="submit" value="{{ $asiento->fila }}-{{ $asiento->columna }}">
        </form>

    </div>
    <div>
    <form action="/examencine/public/sala/reservaraleatorio/">
        <input type="submit" value="reservar aleatorio">
    </form>
    </div>
    <div>
        <p>Hay {{$ocupados}} asientos ocupados.</p>
    </div>
</body>
</html>
