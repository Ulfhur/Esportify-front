import Route from "./Route.js";
import { allRoutes, websiteName } from "./allRoutes.js";

// Route 404
const route404 = new Route(
  "#/404",
  "Page introuvable",
  "pages/404.html",
  ""
);

// Récupération de la route
const getRouteByUrl = (url) => {
  return allRoutes.find(route => route.url === url) || route404;
};

// Chargement du contenu
const LoadContentPage = async () => {
  const path = window.location.hash || "#/";
  const actualRoute = getRouteByUrl(path);

  try {
    const response = await fetch(actualRoute.pathHtml);
    const html = await response.text();
    document.getElementById("main-page").innerHTML = html;
  } catch (error) {
    document.getElementById("main-page").innerHTML =
      "<h1>Erreur de chargement</h1>";
  }

  // Supprimer l'ancien script de page
  const oldScript = document.querySelector("script[data-route-script]");
  if (oldScript) oldScript.remove();

  // Charger le JS de la page si présent
  if (actualRoute.pathJS) {
    const scriptTag = document.createElement("script");
    scriptTag.type = "module";
    scriptTag.src = actualRoute.pathJS;
    scriptTag.setAttribute("data-route-script", "true");
    document.body.appendChild(scriptTag);
  }

  // Titre de la page
  document.title = `${actualRoute.title} - ${websiteName}`;
};

// Événements
window.addEventListener("hashchange", LoadContentPage);
window.addEventListener("load", LoadContentPage);
