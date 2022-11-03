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
    $response_data = $_SESSION["hit_results"];
    foreach ($response_data as $data_entry) {
        ?>
        <tr>
            <td> <?= $data_entry['x'] ?> </td>
            <td> <?= $data_entry['y'] ?> </td>
            <td> <?= $data_entry['r'] ?> </td>
            <td> <?= $data_entry['inShape'] ?> </td>
            <td> <?= $data_entry['current_time'] ?> </td>
            <td> <?= $data_entry['execution_time'] ?> </td>
        </tr>
        <?php
    }
}