package Lab_2._public.backend;

import java.util.ArrayList;
import Lab_2._public.backend.Shapes.ShapeInterface;
import Lab_2._public.backend.Shapes.Graph;
import Lab_2._public.backend.Shapes.Circle;
import Lab_2._public.backend.Shapes.Square;
import Lab_2._public.backend.Shapes.Triangle;

public class Validation {
  private Graph graph;

  public Validation(){
    this.graph = new Graph();
  }
}

public static ArrayList<ShapeInterface> createShapes() {
  circle = new Circle(2, 0.5);
  square = new Square(4, 0.5, -1);
  triangle = new Triangle(3, -0.5, -1);
  return new ArrayList<ShapeInterface>(circle, square, triangle);
}