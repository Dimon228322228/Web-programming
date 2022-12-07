package servlets;

import beans.HitResultContainer;

import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.annotation.WebServlet;

@WebServlet( name="ClearTableServlet" )
public class ClearTableServlet extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) {
        HitResultContainer tableRows = (HitResultContainer) req.getSession().getAttribute("tableRows");
        if (tableRows != null) {
            tableRows.getHitResultContainer().clear();
        }
    }
}