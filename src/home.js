function createHome () {
  const homepage = document.createElement("div");
  homepage.classList.add("homepage");

  const welcome = document.createElement("h1");
  const tagline = document.createElement("p");
  // const order = document.createElement("p");
  welcome.textContent = "Welcome to Nogi's Boba Shop";
  tagline.textContent = "Ranked #1 Bubble Tea in the GTA since 2012. Order Online Now or Visit Us in Store";
  // order. textContent = "Order Online Now or Visit Us in Store";

  homepage.appendChild(welcome);
  homepage.appendChild(tagline);
  // homepage.appendChild(order);

  return homepage;
}

export default createHome;