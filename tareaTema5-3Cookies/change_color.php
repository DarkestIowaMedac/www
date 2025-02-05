<?php
if($_GET["fondo"] == "red"){
    setcookie("color", "red", time()+60*60*24*365, "/");
}
else if($_GET["fondo"] == "green"){
    setcookie("color", "green", time()+60*60*24*365, "/");
}
else if($_GET["fondo"] == "blue"){
    setcookie("color", "blue", time()+60*60*24*365, "/");
}
    header("Location: /tareaTema5-3Cookies/dashboard2.php");
?>