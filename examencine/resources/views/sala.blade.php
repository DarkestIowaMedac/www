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
        @foreach ($asientos as $asiento)
            <div class="asiento {{ $asiento->ocupado ? 'ocupado' : 'disponible' }}"
                {{-- data-id="{{ $asiento->id }}"> --}} {{--Identifica asientos --}}>
                {{ $asiento->fila }}-{{ $asiento->columna }}
            </div>
        @endforeach
    </div>
</body>
</html>
