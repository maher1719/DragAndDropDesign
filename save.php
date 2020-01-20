<?php
include_once "connexion.php";

$content = $_POST["content"];
$name = $_POST["name"];

$sql = "INSERT INTO page values (null,'$name','$content')";
echo $sql;
mysqli_query($cxn, $sql);
