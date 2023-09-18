function createMenu () {
  const content = document.getElementById("content");
  const menuPage= document.createElement("div");
  menuPage.classList.add("menupage");

  const hotArray = ["Roasted Milk", "Honey Lemon Ginger", "Chocolate", "Caramel", "Matcha Jade Tea", "Green Tea"];
  const hotItems = document.createElement("div");
  const hotTitle = document.createElement("h2");
  const hotList = document.createElement("ul");
  const hotImage = document.createElement("img");
  hotItems.classList.add("menu-item");
  hotItems.setAttribute("id", "hot-items");
  hotTitle.textContent = "Hot Boba";
  hotImage.src = "images/drink1.png";
  hotImage.alt = "hot drink cup";
  hotArray.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    hotList.appendChild(li);
  });
  hotItems.appendChild(hotImage);
  hotItems.appendChild(hotTitle);
  hotItems.appendChild(hotList);

  const coldArray = ["Jasmine Green Tea", "Honey Green Tea", "Green Apple", "Lychee", "Grape", "Peach"];
  const coldItems = document.createElement("div");
  const coldTitle = document.createElement("h2");
  const coldList = document.createElement("ul");
  const coldImage = document.createElement("img");
  coldItems.classList.add("menu-item");
  coldItems.setAttribute("id", "cold-items");
  coldTitle.textContent = "Cold Boba";
  coldImage.src = "images/drink2.png";
  coldImage.alt = "cold drink cup";
  coldArray.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    coldList.appendChild(li);
  });
  coldItems.appendChild(coldImage);
  coldItems.appendChild(coldTitle);
  coldItems.appendChild(coldList);

  const slushArray = ["Pineapple", "Honeydew", "Strawberry", "Mango", "Watermelon", "Lychee"];
  const slushItems = document.createElement("div");
  const slushTitle = document.createElement("h2");
  const slushList = document.createElement("ul");
  const slushImage = document.createElement("img");
  slushItems.classList.add("menu-item");
  slushItems.setAttribute("id", "slush-items");
  slushTitle.textContent = "Slushy Boba";
  slushImage.src = "images/drink3.png";
  slushImage.alt = "slushy drink cup";
  slushArray.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    slushList.appendChild(li);
  });
  slushItems.appendChild(slushImage);
  slushItems.appendChild(slushTitle);
  slushItems.appendChild(slushList);

  menuPage.appendChild(hotItems);
  menuPage.appendChild(coldItems);
  menuPage.appendChild(slushItems);

  content.appendChild(menuPage);

  return content;
}


export default createMenu;