package Shapes;
import java.util.List;
import java.util.ArrayList;

public class Validation {
  private Graph graph;

  public Validation(){
    this.graph = new Graph( createShapes() );
  }

  public boolean isPointInShapes( double x, double y, double unitR ){
    return this.graph.isInGraph( x / unitR, y / unitR );
  }

  private ArrayList<ShapeInterface> createShapes() {
    Circle circle = new Circle(2, 0.5);
    Square square = new Square(3, -0.5, -1);
    Triangle triangle = new Triangle(1, 1, 0.5);
    return new ArrayList<>( List.of(circle, square, triangle) );
  }
}