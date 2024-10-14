<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
<h1>Ejercicio4</h1>
    <form action="/explicacion/public/existeUser" method="GET">
        <!--  Esto es necesario para la protección CSRF en Laravel -->
        <label for="numero3">Ingrese un email y contraseña:</label>
        <br>
        <br>
        <input type="email" name="email" id="email" placeholder="email" required>
        <br>
        <br>
        <input type="password" name="password" id="password" placeholder="password" required>
        <br>
        <button type="submit">Comprobar</button>
    </form>
    @isset($fibonacci)
    <p>{{ $fibonacci }}</p>
    @endisset
</body>
</html>
