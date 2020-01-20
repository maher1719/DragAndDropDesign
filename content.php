<?php
include_once "connexion.php";

$sql = "SELECT * from page where id=7";

$result = mysqli_query($cxn, $sql);
if ($lign = mysqli_fetch_assoc($result)) {
    echo $lign["content"];
}