<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sala de Cine</title>
    @vite(['resources/css/sala.css','resources/js/app.js'])
</head>
<body>
    @isset($validacion)
    <p>{{ $validacion }}</p>
    @endisset
    <form action="/recurefuerzo/public/registro">
        <input type="text" name="dni" placeholder="DNI">
        <input type="password" name="password" placeholder="password">
        <input type="submit" value="volver a mostrar">
    </form>
</body>
</html>
