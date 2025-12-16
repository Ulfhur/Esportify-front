import Route from "./Route.js";

// Définir ici vos routes
export const allRoutes = [
    new Route(
        "/", 
        "Accueil", 
        "/pages/home.html",
        "/js/home.js" 
    ),
    new Route(
        "/registerChoice",
        "registerChoice",
        "/pages/registerChoice.html",
        ""
    ),

    new Route(
        "/login",
        "Login",
        "/pages/login.html",
    )
];

// Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Esportify";
