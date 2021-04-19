<?php
include_once("corse.php");
include_once("DatabaseConnect.php");

$id=$_GET["id"];

$sql="SELECT * FROM `utilisateurs` where `id`='{$id}' LIMIT 1";

if( $result=$db->query($sql)){
    $row=$result->fetch();
    echo json_encode($row);
    
}
else {
    http_response_code(404);
  echo json_encode("data not found");

}



?>