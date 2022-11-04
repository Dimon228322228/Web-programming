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
            <td class="x_table_value">              <?= $data_entry['x']              ?> </td>
            <td class="y_table_value">              <?= $data_entry['y']              ?> </td>
            <td class="r_table_value">              <?= $data_entry['r']              ?> </td>
            <td class="inShape_table_value">        <?= $data_entry['inShape']        ?> </td>
            <td class="current_time_table_value">   <?= $data_entry['current_time']   ?> </td>
            <td class="execution_time_table_value"> <?= $data_entry['execution_time'] ?> </td>
        </tr>
        <?php
    }
}