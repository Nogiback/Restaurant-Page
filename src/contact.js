function createContact() {
  const content = document.getElementById("content");
  const contactPage= document.createElement("div");
  contactPage.classList.add("contactpage");

  // const welcome = document.createElement("h1");
  // const tagline = document.createElement("p");

  // welcome.textContent = "Welcome to Nogi's Boba Shop";
  // tagline.textContent = "Ranked #1 Bubble Tea in the GTA since 2012. Order Online Now or Visit Us in Store";

  // homepage.appendChild(welcome);
  // homepage.appendChild(tagline);

  content.appendChild(contactPage);

  return content;
}

export default createContact;