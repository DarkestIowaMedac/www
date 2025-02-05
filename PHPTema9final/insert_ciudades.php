<?php
include './conexion.php';
if($_GET['ciudadName']){
    $ciudadName = $_GET['ciudadName'];
}
else{
    $ciudadName = '';
}
if($_GET['countryCode']){
    $countryCode = $_GET['countryCode'];
}
else{
    $countryCode = '';
}
if($ciudadName != ''){
    $sql = "INSERT INTO city (Name, CountryCode) VALUES ('$ciudadName', '$countryCode')";
    if ($conn->query($sql) === TRUE) {
        $response = [
            'status' => 'success',
            'message' => 'Ciudad insertada correctamente.'
        ];
    } else {
        $response = [
            'status' => 'error',
            'message' => 'Error al insertar la ciudad: ' . $conn->error
        ];
    }
} else {
    $response = [
        'status' => 'error',
        'message' => 'Nombre de ciudad o código de país no proporcionados.'
    ];
}
$conn->close();
header('Content-Type: application/json');
echo json_encode($response);
?>