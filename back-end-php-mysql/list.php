<?php
include_once("corse.php");
include_once("DatabaseConnect.php");

$users=[];
$sql="SELECT * FROM `utilisateurs` ";

if( $result=$db->query($sql)){
    $numero=0;
    while($row=$result->fetch()){
        $users[$numero]['id']=$row['id'];
        $users[$numero]['nom']=$row['nom'];
        $users[$numero]['prenom']=$row['prenom'];
        $users[$numero]['email']=$row['email'];
          $numero++;
    }
//    print_r($users);
  echo json_encode($users);
//   var_dump($users);

}
else {
    http_response_code(404);
  echo json_encode("data not found");

}




?>