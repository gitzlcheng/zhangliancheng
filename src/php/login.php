<?php
    include('./conn.php');
    $username = $_REQUEST['phone'];
    $password = $_REQUEST['password'];

    $sql = "select * from user where user_name='$username' and user_pwd='$password'";
    
    $result = $mysqli->query($sql);
    if($result->num_rows>0){
        echo "ture";
    }else{
        echo "flase";
    }
?>