<?php
  require_once "output_results.php";
  if( session_status() === PHP_SESSION_NONE) {
    session_start();
  }

  if (!isset($_SESSION['hit_results'])){
    $_SESSION['hit_results'] = [];
  }
  
  output_results();