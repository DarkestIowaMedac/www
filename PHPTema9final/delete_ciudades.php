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
    $sql = "DELETE FROM city WHERE Name = '$ciudadName' AND CountryCode = '$countryCode'";
    if ($conn->query($sql) === TRUE) {
        $response = [
            'status' => 'success',
            'message' => 'Ciudad eliminada correctamente.'
        ];
    } else {
        $response = [
            'status' => 'error',
            'message' => 'Error al eliminar la ciudad: ' . $conn->error
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