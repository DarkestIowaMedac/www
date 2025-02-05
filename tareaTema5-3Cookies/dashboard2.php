<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
  <body style="background-color: <?php if(isset($_COOKIE["color"])){ echo($_COOKIE["color"]); } else {echo('white');}; ?>;"> 
  <a href="dashboard.php"> Mi perfil </a>
  <a href="logout.php"> Cerrar sesión </a>
  <h1>Cambiar Contraseña: </h1>
  <form action="change_password.php" method="get">
  <input type="text" name="nuevacontrasena" placeholder="cambia la contraseña">
  <button type="submit">Enviar</button>
  </form>
</body>
</html>
<?php
session_start();
if (isset($_SESSION['afk'])){
  $tiempovida = time() - $_SESSION['afk'];
  if($tiempovida > 10){
    header("Location: /tareaTema5-3Cookies/logout.php");
    exit();
  }
}
if(isset($_GET["cambio"])){
  echo "<p>".$_GET["cambio"]."</p>";
}
if (isset($_GET['correo']) && isset($_GET['pass']) && isset($_GET['nombre'])) {
  $_SESSION['correo'] = $_GET['correo'];
  $_SESSION['pass'] = $_GET['pass'];
  $_SESSION['nombre'] = $_GET['nombre'];
}

if (isset($_SESSION['correo']) && isset($_SESSION['pass']) && isset($_SESSION['nombre'])) {
  $_SESSION['afk'] = time();
  echo "Bienvenido, " . $_SESSION['correo'] . " (" . $_SESSION['pass'] . ") (" . $_SESSION['nombre'] . ")" ;
} else {
  header("Location: /tareaTema5-3Cookies/logout.php");
  exit;
}

?>