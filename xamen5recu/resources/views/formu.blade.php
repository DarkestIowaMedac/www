<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sala de bd</title>

</head>
<body>
    @isset($validacion)
    <p>{{ $validacion }}</p>
    @endisset
<form action="/xamen5recu/public/agregarDatos" method="POST">
    @csrf
    <input type="text" name="dni" placeholder="DNI" required>
    <input type="password" name="password" placeholder="Passawasa" required>
    <button type="submit">Enviar</button>

</form>
</body>
</html>
