package servlets;

import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.annotation.WebServlet;
import java.io.IOException;
import java.util.Map;
import java.util.Objects;

@WebServlet( name = "ControllerServlet", value = "/controller" )
public class ControllerServlet extends HttpServlet {
  @Override
  protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
      if (!Objects.equals( req.getParameter("x"), null ) &&
          !Objects.equals( req.getParameter("y"), null ) &&
          !Objects.equals( req.getParameter("r"), null ) ) {
        getServletContext().getNamedDispatcher("AreaCheckServlet").forward(req, resp);
      } else if ( !Objects.equals( req.getParameter("clear"), null ) ) {
        getServletContext().getNamedDispatcher("ClearTableServlet").forward(req, resp);
      } else if ( !Objects.equals( req.getParameter("getAllData"), null ) ) {
        getServletContext().getNamedDispatcher("ResponseServlet").forward(req, resp);
      } else { 
        getServletContext().getRequestDispatcher("/index.jsp").forward(req, resp);
      }
  }
}