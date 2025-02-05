<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <a href="dashboard2.php"> Mis ajustes </a>
  <h1>Color: </h1>
  <form action="change_color.php" method="get">
    <input type="radio" id="rojo" name="fondo" value="red">
    <label for="rojo">Rojo</label><br>
    <input type="radio" id="verde" name="fondo" value="green">
    <label for="verde">Verde</label><br>
    <input type="radio" id="azul" name="fondo" value="blue">
    <label for="azul">Azul</label><br>
    <button type="submit">Enviar</button>
  </form>
</body>
</html>
<?php
# setcookie(name, value, expire, path, domain, secure, httponly);
session_start();
if (isset($_SESSION['afk'])){
  $tiempovida = time() - $_SESSION['afk'];
  if($tiempovida > 10){
    header("Location: /tareaTema5-3Cookies/logout.php");
    exit();
  }
}
if (isset($_GET['correo']) && isset($_GET['pass']) && isset($_GET['nombre'])) {
  $_SESSION['correo'] = $_GET['correo'];
  $_SESSION['pass'] = $_GET['pass'];
  $_SESSION['nombre'] = $_GET['nombre'];
}

if (isset($_SESSION['correo']) && isset($_SESSION['pass']) && isset($_SESSION['nombre'])) {
  $_SESSION['afk'] = time();
  if(isset($_COOKIE["color"])){
    echo "<p style='color: ".$_COOKIE["color"].";'>Bienvenido, " . $_SESSION['correo'] . " (" . $_SESSION['pass'] . ") (" . $_SESSION['nombre'] . ")</p>" ;
  }
  else{
    echo "Bienvenido, " . $_SESSION['correo'] . " (" . $_SESSION['pass'] . ") (" . $_SESSION['nombre'] . ")" ;
  }
  
} else {
  header("Location: /tareaTema5-3Cookies/index.php");
}
?>