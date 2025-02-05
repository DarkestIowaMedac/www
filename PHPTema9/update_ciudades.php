<?php

include './conexion.php';


if (isset($_GET['ciudadName']) && isset($_GET['newCiudadName']) && isset($_GET['countryCode'])) {
    $ciudadName = $_GET['ciudadName']; 
    $newCiudadName = $_GET['newCiudadName']; 
    $countryCode = $_GET['countryCode']; 
} else {
    $ciudadName = '';
    $newCiudadName = '';
    $countryCode = '';
}


if ($ciudadName != '' && $newCiudadName != '' && $countryCode != '') {
    $sql = "UPDATE city SET Name = '$newCiudadName' WHERE Name = '$ciudadName' AND CountryCode = '$countryCode'";
    if ($conn->query($sql) === TRUE) {
        $response = [
            'status' => 'success',
            'message' => 'Ciudad actualizada correctamente.'
        ];
    } else {
        $response = [
            'status' => 'error',
            'message' => 'Error al actualizar la ciudad: ' . $conn->error
        ];
    }
} else {
    $response = [
        'status' => 'error',
        'message' => 'Nombre de ciudad actual, nuevo nombre de ciudad o código de país no proporcionados.'
    ];
}
$conn->close();
header('Content-Type: application/json');
echo json_encode($response);

?>