import Route from "./Route.js";

export const allRoutes = [
  new Route("#/", "Accueil", "pages/home.html", "js/home.js"),
  new Route("#/registerChoice", "Register Choice", "pages/registerChoice.html", ""),
  new Route("#/login", "Login", "pages/login.html", ""),
  new Route("#/registerPlayer", "Register Player", "pages/registerPlayer.html", ""),
  new Route("#/registerOrga", "Register Orga", "pages/registerOrga.html", ""),
  new Route("#/validateRegister", "Validate Register", "pages/validateRegister.html", ""),
];

export const websiteName = "Esportify";
