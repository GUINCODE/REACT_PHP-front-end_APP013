<?php
include("corse.php");
include_once("DatabaseConnect.php");

$post_data=file_get_contents("php://input");
if(isset($post_data) && !empty($post_data)){
    $request=json_decode($post_data);
        
// print_r($request->first_name);
// die();
 $prenom=$request->first_name;
$nom=$request->last_name;
$mail=$request->mail;
$id=$_GET['id'];
    $sql="UPDATE `utilisateurs` SET `prenom` = '{$prenom}', `nom` = '{$nom}', `email` = '{$mail}' WHERE `utilisateurs`.`id` = '{$id}' LIMIT 1";
    
if($db->query($sql)){
       echo "updated";
      } 
      else{
           echo "error";
      }
      
}



?>