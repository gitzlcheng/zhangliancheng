<?php
   include('./conn.php');
    $username = $_POST['phone'];
    $password = $_POST['password'];
    // echo $username;
    $sql = "select * from user where user_name='$username'";
    $result = $mysqli->query($sql);
    if($result->num_rows>0){
        die("用户名已存在");
    }
    $insertSql = "insert into user(user_name, user_phone, user_pwd, user_sex) VALUES ('$username','$username','$password',1)";
    // INSERT INTO `user`(`user_id`, `user_name`, `user_phone`, `user_pwd`, `user_sex`) VALUES (1005,'haoliu',151158546,2546581,1)

    $res = $mysqli->query($insertSql);
    if($res){
        echo 'true';
    }else{
        echo'flase';
    }
    $mysqli->close();
?>