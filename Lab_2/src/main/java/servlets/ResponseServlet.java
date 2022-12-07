package servlets;

import beans.HitResult;
import beans.HitResultContainer;

import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.annotation.WebServlet;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;
import java.util.Objects;

import com.google.gson.*;

@WebServlet( name="ResponseServlet" )
public class ResponseServlet extends HttpServlet {

  @Override
  protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
    HitResultContainer tableRows = (HitResultContainer) req.getSession().getAttribute("tableRows");
    PrintWriter writer = resp.getWriter();
    Gson gson = new Gson();
    String json;
    if ( !Objects.equals(req.getParameter("getAllData"), null) && Objects.equals(req.getParameter("getAllData"), true) ){
      json = gson.toJson( tableRows );
    }
    if (tableRows == null) {
          tableRows = new HitResultContainer();
          req.getSession().setAttribute("tableRows", tableRows);
    }
    json = gson.toJson( tableRows.getLastElementInConainer() );
    writer.print(json);
  }
}