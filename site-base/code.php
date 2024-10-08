<?php
    $login = "";
    if($_SERVER['REQUEST_METHOD'] == "POST"){
        $login = $_POST['login'];
        echo "Bem vindo $login";
    }
?>

