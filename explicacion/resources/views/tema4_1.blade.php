<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <h1>Ejercicio1</h1>
    <form action="/explicacion/public/esPrimo" method="GET">
        <!--  Esto es necesario para la protección CSRF en Laravel -->
        <label for="numero">Ingrese un número y te digo si es primo:</label>
        <input type="number" name="primo" id="primo" required>
        <button type="submit">Comprobar</button>
    </form>
    @isset($primo)
    <p>{{ $primo ? 'El número es primo' : 'El número no es primo' }}</p>
    @endisset


</body>
</html>
