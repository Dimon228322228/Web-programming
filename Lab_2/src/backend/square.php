<?php

require_once "Shape.php";

class Square extends Shape
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
    if ($this->quadrant == 3 || $this->quadrant == 4) {
      $this->low_quadrant = TRUE;
    } 
    if ($this->low_quadrant)
    {
      if ($this->quadrant == 4)
      {
        return $this->isInQuadrant($x, $y) && ($this->x >= $x) && ($this->y <= $y);
      } else {
        return $this->isInQuadrant($x, $y) && ($this->x <= $x) && ($this->y <= $y);
      }
    } else {
      if ($this->quadrant == 1)
      {
        return $this->isInQuadrant($x, $y) && ($this->x >= $x) && ($this->y >= $y);
      } else {
        return $this->isInQuadrant($x, $y) && ($this->x <= $x) && ($this->y >= $y);
      }
    }
  }
}