<?php
include_once("corse.php");
include_once("DatabaseConnect.php");



$post_data=file_get_contents("php://input");

if( isset($post_data) &&  !empty($post_data)) {
    $request=json_decode($post_data);
    
// print_r($request->first_name);
// die();
 
$prenom=$request->first_name;
$nom=$request->last_name;
$mail=$request->mail;

// die();
$sql="INSERT INTO `utilisateurs` (`prenom`, `nom`, `email`) VALUES ('{$prenom}', '{$nom}', '{$mail}') ";
if($db->query($sql)){
       echo "insertion effectuée";
      } 
      else echo "erreur d'insertion";
}



?>