<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
<h1>Ejercicio2</h1>
    <form action="/explicacion/public/esBisiesto" method="GET">
        <!--  Esto es necesario para la protección CSRF en Laravel -->
        <label for="numero2">Ingrese un número y te digo si es bisiesto:</label>
        <input type="number" name="bisiesto" id="bisiesto" required>
        <button type="submit">Comprobar</button>
    </form>
    @isset($bisiesto)
    <p>{{ $bisiesto ? 'El número es bisiesto' : 'El número no es bisiesto' }}</p>
    @endisset
</body>
</html>
