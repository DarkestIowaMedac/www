<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
<h1>Laravel Examen</h1>
    @isset($validacion)
    <p>{{ $validacion }}</p>
    @endisset
    <form action="/explicacion/public/agregarUser" method="GET">

        <label for="numero2">Ingrese los campos:</label>
        <input type="text" name="nombre" placeholder="nombre" required>
        <input type="text" name="apellido" placeholder="apellido" required>
        <input type="text" name="telefono" placeholder="telefono" required>
        <input type="text" name="mensaje" placeholder="mensaje" required>
        <button type="submit">Enviar</button>
    </form>

</body>
</html>
