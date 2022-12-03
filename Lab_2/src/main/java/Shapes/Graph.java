package Shapes;

import java.util.ArrayList;

public class Graph{
  
  private ArrayList<ShapeInterface> shapes;

  public Graph( ArrayList<ShapeInterface> shapes ) {
    this.shapes = shapes;
  }

  public Boolean isInGraph(Float x, Float y) {
    for (ShapeInterface shape : shapes) {
      if (shape.isInShape(x,y)) return true;
    }
    return false;
  }
}
