package servlets;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.Map;

@WebServlet( name = "ControllerServlet", value = "/controller" )
public class ControllerServlet extends HttpServlet {
  @Override
  protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
      Map<String, String[]> params = req.getParameterMap();
      if (params.get("y") != null && params.get("x") != null && params.get("r") != null) {
        getServletContext().getNamedDispatcher("AreaCheckServlet").forward(req, resp);
      } elif ( params.get('clear') != null ) {
        getServletContext().getNamedDispatcher("ClearAllTable").forward(req, resp);
      } else { 
        getServletContext().getRequestDispatcher("/index.jsp").forward(req, resp);
      }
  }
}