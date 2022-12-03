package servlets;

import Validation;
import beans.HitResult;
import beans.HitResultContainer;

import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.Locale;
import java.util.Optional;

import static java.lang.Float.NaN;

@WebServlet( name="AreaCheckServlet" value="/check" )
public class AreaCheckServlet extends HttpServlet {

  private final DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy/MM/dd hh:mm:ss");
  private final Validation validator = new Validation();

    @Override
  public void init() throws ServletException { }

  @Override
  protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
    long start = System.nanoTime();
    Optional<Float> x = check_param( req.getParameter("x") );
    Optional<Float> y = check_param( req.getParameter("y") );
    Optional<Float> r = check_param( req.getParameter("r") );
    if ( x.isPresent() && y.isPresent() && r.isPresent() ) {
      Float y_f = toFixed( y.get(), 7);
      Float x_f = toFixed( x.get(), 7);
      Float r_f = toFixed( r.get(), 7);
      Boolean isHit = validator.isPointInShapes( x_f, y_f, r_f );
      String currTime = LocalDateTime.now().format(formatter);
      String execTime = String.format( Locale.getDefault(), "%.7f", (System.nanoTime() - start) * Math.pow(10, -9));

      HitResult hitResult = new HitResult( x_f, y_f, r_f, currTime, execTime, isHit );
      HitResultContainer tableRows = (HitResultContainer) req.getSession().getAttribute("tableRows");
      if (tableRows == null) {
          tableRows = new HitResultContainer();
          req.getSession().setAttribute("tableRows", tableRows);
      }
      tableRows.getHitResultContainer().add(hitResult);
      PrintWriter writer = resp.getWriter();
      if ( req.getSession().getAttribute("needAllTable") ){
        writer.print(json(tableRows));
      } else {
        writer.print(json(hitResult));
      }
    }

  }

  private Optional<Float> check_param( String param ){
    try{
      return Optional.of(Float.parseFloat( param ));
    } catch ( NumberFormatException | NullPointerException e){
      return Optional.empty();
    } 
  }

  private Float toFixed( String value, Integer number_after_dot){
    return Float.valueOf( value.substring( 0, value.indexOf(".") + number_after_dot + 1) );
  }
}