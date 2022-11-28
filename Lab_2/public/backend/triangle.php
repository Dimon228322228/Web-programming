<?php

require_once "shape.php";

class Triangle extends Shape
{
  private float $x;
  private float $y;
  private bool $low_quadrant = FALSE;

  public function __construct(int $quadrant, float $x, float $y){
    parent::__construct($quadrant);
    $this->x = $x;
    $this->y = $y;
    if ($this->quadrant == 3 || $this->quadrant == 4) { $this->low_quadrant = TRUE; } 
  }  

  public function isInShape(float $x, float $y): bool
  {
    if ($this->low_quadrant){
      return $this->isInQuadrant($x, $y) && ($y >= ( (-$this->y/$this->x) * $x + $this->y));
    } else {
      return $this->isInQuadrant($x, $y) && ($y <= ( (-$this->y/$this->x) * $x + $this->y));
    }
  }

}