<?php
include_once("corse.php");
include_once("DatabaseConnect.php");

$id=$_GET["id"];

echo $sql="DELETE FROM `utilisateurs` WHERE `utilisateurs`.`id` = $id LIMIT 1";

if($db->query($sql)){
  http_response_code(204);
  echo "delete donne";
}
else {
    http_response_code(422);
}

?>