package logic;

import java.util.ArrayList;

public class Graph{
  
  private final ArrayList<ShapeInterface> shapes;

  public Graph( ArrayList<ShapeInterface> shapes ) {
    this.shapes = shapes;
  }

  public boolean isInGraph(double x, double y) {
    for (ShapeInterface shape : shapes) {
      if (shape.isInShape(x,y)) return true;
    }
    return false;
  }
}
