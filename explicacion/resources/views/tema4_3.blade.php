<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
<h1>Ejercicio3</h1>
    <form action="/explicacion/public/fibonacci" method="GET">
        <!--  Esto es necesario para la protección CSRF en Laravel -->
        <label for="numero3">Ingrese un número y te muestro esos dígitos de fibonacci:</label>
        <input type="number" name="fibonacci" id="fibonacci" required>
        <button type="submit">Comprobar</button>
    </form>
    @isset($fibonacci)
    <p>{{ $fibonacci }}</p>
    @endisset
</body>
</html>
