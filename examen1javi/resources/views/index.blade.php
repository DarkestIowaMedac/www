<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <form action ="/login" method="POST">
        @csrf
        <input type="email" name="correo" id="correo">
        <input type="password" name="contrasena" id="contrasena">
        <input type="submit" value="Enviar">
    </form>
</body>
</html>
