<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<?php
if (isset($_GET['resultado'])) {
    echo "<p style='color: red'>" . $_GET['resultado'] . "</p>";
}
?>
<form action="login.php" method="get">
    <input type="email" name="email" placeholder="email">
    <input type="password" name="password" placeholder="password">
    <button type="submit">Enviar</button></form>
</form>
</body>
</html>