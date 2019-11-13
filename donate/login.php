<?php
   if( $_POST["username"] || $_POST["password"] ) {
      if (preg_match("/[^A-Za-z'-]/",$_POST['username'] )) {
         die ("invalid name and name should be alpha");
      }
      echo "Welcome ". $_POST['username']. "<br />";
      echo "You are ". $_POST['password']. " years old.";
      
      exit();
   }
?>