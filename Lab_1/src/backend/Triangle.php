<?php

require_once "Shape.php";

class Triangle extends Shape
{
  private float $x;
  private float $y;
  private bool $low_quadrant = FALSE;

  public function __construct(int $quadrant, float $x, float $y){
    parent::__construct($quadrant);
    $this->x = $x;
    $this->y = $y;
  }  

  public function isInShape(float $x, float $y): bool
  {
    if ($quadrant == 3 || $quadrant == 4) {
      $low_quadrant = TRUE;
    } 
    if ($low_quadrant){
      return $this->isInQuadrant($x, $y) && ($y >= ( -2 * $x - $this->x));
    } else {
      return $this->isInQuadrant($x, $y) && ($y <= ( -2 * $x + $this->x));
    }
  }

}