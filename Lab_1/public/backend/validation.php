<?php

require_once "Circle.php";
require_once "Graph.php";
require_once "Square.php";
require_once "Shape.php";
require_once "Triangle.php";

class Validator{
  private Graph $graph;

  public function __construct(){
    $this->graph = new Graph(createShapes());
  }

  public function isPointInShape(float $x, float $y, float $unitR): bool
    {
        return $this->graph->isInGraph($x / $unitR, $y / $unitR);
    }
}

function createShapes(): array
{
  $circle = new Circle(2, 0.5);
  $square = new Square(4, 0.5, -1);
  $triangle = new Triangle(3, -0.5, -1);
  return array($circle, $square, $triangle);
}