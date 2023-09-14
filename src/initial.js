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

  content.appendChild(createFooter());
}

export default initializePage;