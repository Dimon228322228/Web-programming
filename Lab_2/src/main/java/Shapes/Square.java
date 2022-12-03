package Shapes;
public class Square extends AbstractShape{

  private Float x;
  private Float y;
  private Boolean low_quadrant = false;

  public Square( Integer quadrant, Float x, Float y ) {
    super(quadrant);
    this.x = x;
    this.y = y;
    if ( this.quadrant == 3 || this.quadrant == 4) { this.low_quadrant = true; } 
  }

  @Override
  public Boolean isInShape(Float x, Float y) 
  { 
    if (this.low_quadrant)
    {
      if (this.quadrant == 4)
      {
        return this.isInQuadrant(x, y) && (this.x >= x) && (this.y <= y);
      } else {
        return this.isInQuadrant(x, y) && (this.x <= x) && (this.y <= y);
      }
    } else {
      if (this.quadrant == 1)
      {
        return this.isInQuadrant(x, y) && (this.x >= x) && (this.y >= y);
      } else {
        return this.isInQuadrant(x, y) && (this.x <= x) && (this.y >= y);
      }
    }
  }
  
}
