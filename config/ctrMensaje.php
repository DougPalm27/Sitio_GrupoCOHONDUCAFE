<?php

include_once "./Connection.php";
include_once "./mdlMensaje.php";

$datosObtenidos = $_POST['losDatos'];
$losDatos = (object) $datosObtenidos;

$ingresarMensaje = new mdlMensaje();
$guardarMensaje = $ingresarMensaje->guardarInfo($losDatos);
?>