<?php
session_start();
unset($_SESSION['correo']);
unset($_SESSION['pass']);
unset($_SESSION['nombre']);
unset($_SESSION['afk']);
session_destroy();

header("Location: /tareaTema5-3Cookies/index.php");
?>