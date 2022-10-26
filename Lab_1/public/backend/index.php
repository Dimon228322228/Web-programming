<?php
  declare(strict_types=1);

  require_once "validation.php";
  require_once "output_results.php";

  if( session_status() === PHP_SESSION_NONE) {
    session_start();
  }

  if (!isset($_SESSION['hit_results'])){
    $_SESSION['hit_results'] = [];
  }

  function check_param(mixed $param): bool {
    return is_numeric($param);
  }

  function toFixed(string $value, int $number_after_dot): float{
    return floatval(substr($value, 0, strpos($value, ".") + $number_after_dot + 1));
  }

  function handle_request(): void {
    $user_x = $_GET['x'];
    $user_y = $_GET['y'];
    $user_R = $_GET['r'];

    if (!(check_param($user_x) && check_param($user_y) && check_param($user_R))) {
      http_response_code(400);
      echo "Invalid parametrs";
      return;
    }

    $x = toFixed($user_x, 2);
    $y = toFixed($user_y, 2);
    $R = toFixed($user_R, 2);

    $validator = new Validator();
    $isValid = $validator->isPointInShape($x, $y, $R) ? "true" : "false";

    date_default_timezone_set("Europe/Moscow");
    $current_time = date("H:i:s", time());
    $execution_time = round(microtime(true) - $_SERVER['REQUEST_TIME_FLOAT'], 5);

      $data = [
      "x" => $x,
      "y" => $y,
      "r" => $R,
      "inShape" => $isValid,
      "current_time" => $current_time,
      "execution_time" => $execution_time
    ];

    $_SESSION['hit_results'][] = $data;
    output_results();
  }

  handle_request();
