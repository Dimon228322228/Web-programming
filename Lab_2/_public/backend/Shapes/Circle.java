public class Circle extends AbstractShape{

  private Float radius;

  public Circle( Integer quadrant, Float radius ) 
  {
    super(quadrant);
    this.radius = radius;
  }

  @Override
  public Boolean isInShape(Float x, Float y)
  {
    return this.isInQuadrant(x, y) &&
            (( Math.pow( x, 2 ) + Math.pow( y, 2 ) ) <= Math.pow( this.radius, 2 ));
  }
}
