<?php
include './conexion.php';
$sql = "SELECT * FROM country";
$resultado = $conn->query($sql);
$paises = [];
if ($resultado) {
    while ($fila = $resultado->fetch_assoc()) {
        $paises[] = $fila;
    }
}

$conn->close();
?>
<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Gestión de Ciudades</title>
</head>
<body>
    <h1>Gestión de Ciudades</h1>
    <label for="paises">Selecciona un país:</label>
    <select id="paises">
        <option value="">-- Selecciona un país --</option>
        <?php foreach ($paises as $pais): ?>
            <option value="<?= $pais['Code'] ?>"><?= $pais['Name'] ?></option>
        <?php endforeach; ?>
    </select>
    <h2>Ciudades <button id="insertar">Insertar ciudad</button></h2>
    <ul id="lista-ciudades"></ul>
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <script src="ciudades.js"></script>
    
</body>
</html>