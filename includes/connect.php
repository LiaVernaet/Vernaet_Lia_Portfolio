<?php
    $user = "LiaVernaet";
    $pw = "stormfur58";

    try {
        $conn = new PDO('mysql:host=198.71.227.93;dbname=db_portfolio', $user, $pw);
        //var_dump($conn);
    } catch(PDOException $exception) {
        echo 'connect error!' . $exception->getMessage();
    }
?>