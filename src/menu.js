function createMenu () {
  const content = document.getElementById("content");
  const menuPage= document.createElement("div");
  menuPage.classList.add("menupage");

  // const welcome = document.createElement("h1");
  // const tagline = document.createElement("p");

  // welcome.textContent = "Welcome to Nogi's Boba Shop";
  // tagline.textContent = "Ranked #1 Bubble Tea in the GTA since 2012. Order Online Now or Visit Us in Store";

  // homepage.appendChild(welcome);
  // homepage.appendChild(tagline);

  content.appendChild(menuPage);

  return content;
}

export default createMenu;