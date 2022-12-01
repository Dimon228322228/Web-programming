<?php

require_once "circle.php";
require_once "graph.php";
require_once "square.php";
require_once "shape.php";
require_once "triangle.php";

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