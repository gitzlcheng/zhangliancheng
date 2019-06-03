<?php
    include('./conn.php');

    $idData = $_REQUEST['idData'];

    $sql = "select * from product where id in ($idData)";

    $res = $mysqli -> query($sql);

    $arr = array();
    
    while($row = $res->fetch_assoc()){
        array_push($arr,$row);
    }

    $json = json_encode($arr);
    
    echo $json;

    $mysqli->close();
?>