function createHome () {
  const content = document.getElementById("content");
  const homepage = document.createElement("div");
  homepage.classList.add("homepage");

  const welcome = document.createElement("h1");
  const tagline = document.createElement("p");

  welcome.textContent = "Welcome to Nogi's Boba Shop";
  tagline.textContent = "Ranked #1 Bubble Tea in the GTA since 2012. Order Online Now or Visit Us in Store";

  homepage.appendChild(welcome);
  homepage.appendChild(tagline);
  content.appendChild(homepage);

  return content;
}

export default createHome;