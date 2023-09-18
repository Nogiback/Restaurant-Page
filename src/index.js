import initializePage from "./initial";
import loadHome from "./home";
import loadMenu from "./menu";
import loadContact from "./contact";

initializePage();

function navController (button) {
  const content = document.getElementById("content");
  content.textContent = "";

  if (button === "home-btn") {
    loadHome();
  } else if (button === "menu-btn") {
    // loadMenu();
  } else if (button === "contact-btn") {
    // loadContact();
  }
}

export default navController;