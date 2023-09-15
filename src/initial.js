import createHome from "./home";

function createHeader () {
  
  const header = document.createElement("header");
  header.classList.add("header");

  // Creating store name title/logo
  const titleBar = document.createElement("div");
  titleBar.classList.add("title");

  const storeName = document.createElement("h1");
  const storeLogo = document.createElement("img");
  storeName.classList.add("store-name");
  storeName.textContent = "Nogi's Boba Shop";
  storeLogo.classList.add("store-logo");
  storeLogo.src = "images/icon.png";
  storeLogo.alt = "store logo";

  titleBar.appendChild(storeLogo);
  titleBar.appendChild(storeName);

  // Creating navigation links
  const navBar = document.createElement("nav");
  navBar.classList.add("nav");

  const homeBtn = document.createElement("button");
  homeBtn.classList.add("nav-btn");
  homeBtn.setAttribute("id", "home-btn");
  homeBtn.textContent = "HOME";

  const menuBtn = document.createElement("button");
  menuBtn.classList.add("nav-btn");
  menuBtn.setAttribute("id", "menu-btn");
  menuBtn.textContent = "MENU";

  const contactBtn = document.createElement("button");
  contactBtn.classList.add("nav-btn");
  contactBtn.setAttribute("id", "contact-btn");
  contactBtn.textContent = "CONTACT";

  navBar.appendChild(homeBtn);
  navBar.appendChild(menuBtn);
  navBar.appendChild(contactBtn);
  
  header.appendChild(titleBar);
  header.appendChild(navBar);

  return header;
}

function createFooter () {
  const footer = document.createElement("footer");
  footer.classList.add("footer");

  const footerText = document.createElement("p");
  footerText.textContent = "Built by Nogiback";

  const gitHubLink = document.createElement("a");
  gitHubLink.href = "https://github.com/Nogiback";
  gitHubLink.target = "_blank";

  const gitHubLogo = document.createElement("i");
  gitHubLogo.classList.add("fab");
  gitHubLogo.classList.add("fa-github");
  gitHubLogo.classList.add("fa-spin");
  gitHubLogo.classList.add("fa-lg");
  gitHubLogo.style.color = "black";

  gitHubLink.appendChild(gitHubLogo);
  footer.appendChild(footerText);
  footer.appendChild(gitHubLink);

  return footer;
}

function initializePage() {
  const content = document.getElementById("content");

  document.body.appendChild(createHeader());
  document.body.appendChild(createFooter());
  content.appendChild(createHome());
}

export default initializePage;