<?php
include './conexion.php';
if($_GET['countryCode']){
    $pais_id = $_GET['countryCode'];
}
else{
    $pais_id = '';
}

$sql = "SELECT * FROM city WHERE CountryCode = '$pais_id'";
$resultado = $conn->query($sql);
$ciudades = [];

if ($resultado) {
    while ($fila = $resultado->fetch_assoc()) {
        $ciudades[] = $fila;
    }
}

$conn->close();
header('Content-Type: application/json');
echo json_encode($ciudades);
?>