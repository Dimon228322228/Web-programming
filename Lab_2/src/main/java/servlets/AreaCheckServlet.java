package servlets;

import beans.HitResult;
import beans.HitResultContainer;
import Shapes.Validation;

import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.annotation.WebServlet;
import java.io.IOException;
import java.io.PrintWriter;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Locale;
import java.util.Optional;

import com.google.gson.*;

@WebServlet( name="AreaCheckServlet", value="/check" )
public class AreaCheckServlet extends HttpServlet {

  private final DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy/MM/dd hh:mm:ss");
  private final Validation validator = new Validation();

    @Override
  public void init() throws ServletException { }

  @Override
  protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
    long start = System.nanoTime();
    Optional<Double> x = check_param( req.getParameter("x") );
    Optional<Double> y = check_param( req.getParameter("y") );
    Optional<Double> r = check_param( req.getParameter("r") );
    if ( x.isPresent() && y.isPresent() && r.isPresent() ) {
      Double y_f = toFixed( y.get().toString(), 7);
      Double x_f = toFixed( x.get().toString(), 7);
      Double r_f = toFixed( r.get().toString(), 7);
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
      Gson gson = new Gson();
      String json;
      if ( req.getSession().getAttribute("needAllTable").equals(true) ){
        json = gson.toJson( tableRows.getHitResultContainer() );
        writer.print(json);
      } else {
        json = gson.toJson( hitResult );
        writer.print(json);
      }
    }

  }

  private Optional<Double> check_param( String param ){
    try{
      return Optional.of(Double.parseDouble( param ));
    } catch ( NumberFormatException | NullPointerException e){
      return Optional.empty();
    } 
  }

  private Double toFixed( String value, Integer number_after_dot){
    return Double.valueOf( value.substring( 0, value.indexOf(".") + number_after_dot + 1) );
  }
}