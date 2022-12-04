package servlets;

import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.annotation.WebServlet;
import java.io.IOException;
import java.util.Map;

@WebServlet( name = "ControllerServlet", value = "/controller" )
public class ControllerServlet extends HttpServlet {
  @Override
  protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
      Map<String, String[]> params = req.getParameterMap();
      if (params.get("y") != null && params.get("x") != null && params.get("r") != null) {
        getServletContext().getNamedDispatcher("AreaCheckServlet").forward(req, resp);
      } else if ( params.get("clear") != null ) {
        getServletContext().getNamedDispatcher("ClearAllTable").forward(req, resp);
      } else { 
        getServletContext().getRequestDispatcher("/index.jsp").forward(req, resp);
      }
  }
}