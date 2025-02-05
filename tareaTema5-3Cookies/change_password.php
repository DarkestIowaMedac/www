<?php
session_start();
$usuario = "root";
$contraseña = "";
$servidor = "localhost:3390";
$database = "medac";
//$yisucrais cortito = "yisucrais cortito"

$conexion = mysqli_connect($servidor, $usuario, $contraseña, $database);
$consulta = "UPDATE usuarios SET pass='".$_GET["nuevacontrasena"]."' WHERE email='".$_SESSION["correo"]."'";

$afk = time() - $_SESSION['afk'];
if ($afk > 10) {
    $datos = false;
    header("Location: /tareaTema5-3Cookies/logout.php");
}
else{
    $datos = mysqli_query($conexion, $consulta);
}
    
if ($datos!=false) {
    $resultado = "contraseña modificada exitosamente"; 
}
else{
    $resultado = "no se ha podido cambiar la contraseña exitosamente";
}
header("Location: /tareaTema5-3Cookies/dashboard2.php?cambio=$resultado");

?>