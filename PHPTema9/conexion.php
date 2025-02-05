<?php
$host = 'localhost:3390';
$usuario = 'root';
$contraseña = '';
$nombre_base_datos = 'world';
$conn = new mysqli($host, $usuario, $contraseña, $nombre_base_datos);

if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}
?>