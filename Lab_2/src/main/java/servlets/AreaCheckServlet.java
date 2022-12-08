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
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Locale;
import java.util.Optional;

@WebServlet( name="AreaCheckServlet" )
public class AreaCheckServlet extends HttpServlet {

  private final DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd.MM.yyyy hh:mm:ss");
  private final Validation validator = new Validation();

  @Override
  protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
    long start = System.nanoTime();
    Optional<Double> x = check_param( req.getParameter("x") );
    Optional<Double> y = check_param( req.getParameter("y") );
    Optional<Double> r = check_param( req.getParameter("r") );
    if ( x.isPresent() && y.isPresent() && r.isPresent() ) {
      Double y_f = toFixed( y.get().toString(), 5);
      Double x_f = toFixed( x.get().toString(), 5);
      Double r_f = toFixed( r.get().toString(), 0);
      boolean isHit = validator.isPointInShapes( x_f, y_f, r_f );
      String currTime = LocalDateTime.now().format(formatter);
      String execTime = String.format( Locale.getDefault(), "%.7f", (System.nanoTime() - start) * Math.pow(10, -9));

      HitResult hitResult = new HitResult( x_f, y_f, r_f, currTime, execTime, isHit );
      HitResultContainer tableRows = (HitResultContainer) req.getSession().getAttribute("tableRows");
      if (tableRows == null) {
          tableRows = new HitResultContainer();
      }
      tableRows.add(hitResult);
      req.getSession().setAttribute("tableRows", tableRows);
      getServletContext().getNamedDispatcher("ResponseServlet").forward(req, resp);
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
    int position = value.indexOf(".");
    if ( position != -1 && value.substring( position ).length() > number_after_dot )
      return Double.valueOf( value.substring( 0, position + number_after_dot + 1) );
    else 
      return Double.valueOf( value );
  }
}