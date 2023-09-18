function createContact() {
  const content = document.getElementById("content");
  const contactPage = document.createElement("div");
  const infoBlock = document.createElement("div");
  contactPage.classList.add("contactpage");
  infoBlock.classList.add("info");

  const locationBlock = document.createElement("div");
  const locationTitle = document.createElement("h2");
  const address = document.createElement("p");
  locationBlock.classList.add("location");
  locationTitle.textContent = "Location";
  address.textContent = "60 Oxford Street, Toronto, Ontario M5T 2M2";
  locationBlock.appendChild(locationTitle);
  locationBlock.appendChild(address);
  infoBlock.appendChild(locationBlock);

  const hoursBlock = document.createElement("div");
  const hoursTitle = document.createElement("h2");
  const hours = document.createElement("p");
  hoursBlock.classList.add("hours");
  hoursTitle.textContent = "Hours";
  hours.textContent = "Mon - Sat: 12PM - 10PM, Closed Sundays";
  hoursBlock.appendChild(hoursTitle);
  hoursBlock.appendChild(hours);
  infoBlock.appendChild(hoursBlock);
  
  const contactBlock = document.createElement("div");
  const contactTitle = document.createElement("h2");
  const contactInfo = document.createElement("p");
  contactBlock.classList.add("contact");
  contactTitle.textContent = "Contact";
  contactInfo.textContent = "(123) 123-1234, nogibobashop@fakemail.com";
  contactBlock.appendChild(contactTitle);
  contactBlock.appendChild(contactInfo);
  infoBlock.appendChild(contactBlock);

  const map = document.createElement("div");
  map.classList.add("map");
  map.innerHTML = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.6109739550543!2d-79.40456672711349!3d43.656261600000015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b34c1fae88451%3A0xfc567df574c1208!2s60%20Oxford%20St%2C%20Toronto%2C%20ON%20M5T%202M2!5e0!3m2!1sen!2sca!4v1695060806990!5m2!1sen!2sca" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;

  contactPage.appendChild(infoBlock);
  contactPage.appendChild(map);
  content.appendChild(contactPage);

  return content;
}

export default createContact;