<?php

  header('Access-Control-Allow-Origin: *');
  header('Access-Control-Allow-Methods: GET');
  header('Access-Control-Allow-Headers: X-Requested-With');


  if ($_SERVER['REQUEST_METHOD'] == 'GET') {
    print_r(parse_url($_SERVER['REQUEST_URI'], PHP_URL_SCHEME));
    $path = parse_url($_SERVER['REQUEST_URI'])['path'];
    if ($path == "/hit"){
      $time_start = microtime(true);
        if (isset($_GET['x']) && isset($_GET['y']) && isset($_GET['r'])){
          header("Content-Type: text/html");
          $x = floatval($_GET['x']);
          $y = floatval($_GET['y']);
          $r = floatval($_GET['r']);
          $is_hitted = check_hitted($x, $y, $r);
          $text_is_hitted = $is_hitted ? 'hitted' : 'miss';
          $time_now = microtime(true);
          $execute_time = $time_now - $time_start;
          echo  "
              <tr>
                <td>$x</td>
                <td>$y</td>
                <td>$r</td>
                <td>$text_is_hitted</td>
                <td>$time_now</td>
                <td>$execute_time</td>
              </tr>
          ";
        } else {
          http_response_code(400);
          echo 'Request wrong';
          exit(400);
        }
    }
  }

  function check_hitted($x, $y, $r){
    if ($x >= 0 && $x <= ($r / 2) && $y <= 0 && $y >= -$r ) return true;
    elseif ($x <= 0 && $y <= 0 && $y >= (-2*$x - $r)) return true;
    elseif ( $x <= 0 && $y >= 0 && ($x^2 + $y^2 <= $r^2) ) return true;
    else return false;
  }
?>