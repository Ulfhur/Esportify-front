import Route from "./Route.js";

export const allRoutes = [
  new Route("#/", "Accueil", "pages/home.html", "js/home.js"),
  new Route("#/registerChoice", "Register Choice", "pages/registerChoice.html", ""),
  new Route("#/login", "Login", "pages/login.html", "")
];

export const websiteName = "Esportify";
