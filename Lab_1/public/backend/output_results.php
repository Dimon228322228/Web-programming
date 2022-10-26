<?php

if (session_status() === PHP_SESSION_NONE) {
    session_start();
}
if (!isset($_SESSION['hit_results'])) {
    $_SESSION['hit_results'] = [];
}

function output_results(): void
{
    header( 'Content-Type: application/json; charset=utf-8' );
    echo json_encode( $_SESSION["hit_results"] );
}