import java.util.ArrayList;
import Shapes.*;

public class Validation {
  private Graph graph;

  public Validation(){
    this.graph = new Graph();
  }

  public Boolean isPointInShapes( Float x, Float y, Float unitR ){
    return this.graph.isInGraph( x / unitR, y / unitR );
  }
}

public static ArrayList<ShapeInterface> createShapes() {
  circle = new Circle(2, 0.5);
  square = new Square(3, -0.5, -1);
  triangle = new Triangle(1, 1, 0.5);
  return new ArrayList<ShapeInterface>(circle, square, triangle);
}