<?php
$usuario = "root";
$contraseña = "";
$servidor = "localhost:3390";
$database = "medac";
//$yisucrais cortito = "yisucrais cortito"

$conexion = mysqli_connect($servidor, $usuario, $contraseña, $database);


if(!$conexion){
    die('Conexion fallida: '. mysqli_connect_error());

} else echo "Conexion realizada correctamente". "<br>";

//$consulta = "SELECT * FROM correos";
//mysqli_Select_db($conexion, "medac");
//$datos = mqsqli_query($conexion, $consulta);

$consulta = "SELECT * FROM usuarios";

$datos = mysqli_query($conexion, $consulta);

$emails = [];
$pass = [];
$nombres = [];
while ($row = mysqli_fetch_array($datos)){
    array_push($emails, $row["email"]);//row["nombre"]
    array_push($pass, $row["pass"]);
    array_push($nombres, $row["nombres"]);
}

$correo = $_GET['email'];
$contra = $_GET['password'];
$resultado = false;
for($i = 0; $i < count($emails); $i++){
    if($emails[$i] == $correo && $pass[$i] == $contra){
        $resultado = true;
        $nombre = $nombres[$i];
    }
}
if($resultado == false){
    $resultado = "El usuario y la contraseña introducida no es correcta";
    header("Location: /tareaTema5-3Cookies/index.php?resultado=$resultado");
}
else{
    header("Location: /tareaTema5-3Cookies/dashboard.php?correo=$correo&pass=$contra&nombre=$nombre");
}

?>