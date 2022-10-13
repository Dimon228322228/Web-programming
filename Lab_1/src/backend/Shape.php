<?php

abstract class Shape
{
  protected int $quadrant;

  protected function __construct(int $quadrant){
    $this->quadrant = $quadrant;
  }

  abstract function isInShape(float $x, float $y): bool;

  protected function isInQuadrant(float $x, float $y): bool
  {
    if ($x >= 0 and $y >= 0 && $quadrant == 1){
      return true;
    } else if ($x <= 0 and $y >= 0 && $quadrant == 2){
      return true;
    } else if ($x <= 0 and $y <= 0 && $quadrant == 3){
      return true;
    } else if ($x >= 0 and $y <= 0 && $quadrant == 4){
      return true;
    } else return false;
  }
}