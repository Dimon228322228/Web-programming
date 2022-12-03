package Shape;
public class Triangle extends AbstractShape{

  private Float x;
  private Float y;
  private Boolean low_quadrant = false;

  public Triangle( Integer quadrant, Float x, Float y ) 
  {
    super(quadrant);
    this.x = x;
    this.y = y;
    if ( this.quadrant == 3 || this.quadrant == 4) { this.low_quadrant = true; } 
  }

  @Override
  public Boolean isInShape(Float x, Float y)
  {
    if ( this.low_quadrant ){
      return this.isInQuadrant(x, y) && (y >= ( ( -this.y / this.x ) * x + this.y));
    } else {
      return this.isInQuadrant(x, y) && (y <= ( ( -this.y / this.x ) * x + this.y));
    }
  }
}