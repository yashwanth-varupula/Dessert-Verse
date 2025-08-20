const detailsBox = document.getElementById("details");

function clearHighlights() {
  document.querySelectorAll("section div").forEach((div) => {
    div.classList.remove("selected");
  });
}

function showDetails(title, description, ingredients, border, imgSrc) {
  detailsBox.innerHTML = "";

  clearHighlights();
  border.classList.add("selected");

  let container = document.createElement("div");
  container.style.display = "flex";
  container.style.alignItems = "center";
  container.style.gap = "30px";
  container.style.flexWrap = "wrap";

  let textBox = document.createElement("div");
  textBox.style.flex = "1";

  let h2 = document.createElement("h2");
  h2.textContent = title;
  h2.style.textAlign = "center";
  textBox.appendChild(h2);

  let p = document.createElement("p");
  p.textContent = description;
  textBox.style.textAlign = "left";
  textBox.appendChild(p);

  let ul = document.createElement("ul");
  ingredients.forEach((item) => {
    let li = document.createElement("li");
    li.textContent = item;
    ul.appendChild(li);
  });
  textBox.appendChild(ul);

  // Right side: image
  let imgBox = document.createElement("div");
  let img = document.createElement("img");
  img.src = imgSrc;

  img.style.width = "220px";
  img.style.borderRadius = "10px";
  img.style.boxShadow = "0 4px 10px rgba(0,0,0,0.2)";
  imgBox.appendChild(img);

  container.appendChild(textBox);
  container.appendChild(imgBox);

  detailsBox.appendChild(container);
}

document.getElementById("cake").addEventListener("click", function () {
  showDetails(
    "Cake",
    "Cake is a soft and sweet baked dessert loved around the world. Whether served on birthdays, weddings, or festive occasions, cake remains a symbol of joy and celebration. In their oldest forms, cakes were modifications of bread, but cakes now cover a wide range of preparations that can be simple and which share features with desserts such as pastries, meringues, custards, and pies",
    [
      "Milk and Water",
      "Sugar",
      "Baking Powder",
      "Fresh cream",
      "Chocolate cream",
      "Nuts and poppins",
      "Flour",
      "Eggs",
    ],
    this,
    "Chocolate_Cake.jpg"
  );
});

document.getElementById("icecream").addEventListener("click", function () {
  showDetails(
    "Ice cream",
    "Ice cream is a frozen dessert loved worldwide for its smooth texture and delicious flavors. Made by churning and freezing a sweetened milk or cream base, ice cream is often flavored with fruits, nuts, chocolates, and syrups. It’s a perfect treat for hot days, parties, or simply indulging your sweet tooth. Whether it’s classic vanilla, rich chocolate, or fruity mango, ice cream brings joy in every scoop",
    ["Milk", "Sugar", "Cream", "Flavoring", "Stabilizers"],
    this,
    "icecream.jpeg"
  );
});

document.getElementById("gulaabjamun").addEventListener("click", function () {
  showDetails(
    "GulabJamun",
    "Gulab Jamun is a classic Indian dessert known for its rich taste and melt-in-the-mouth texture. These soft, deep-fried milk-based dumplings are soaked in a fragrant sugar syrup flavored with rose water, cardamom, and saffron. Served warm or cold, Gulab Jamun is a favorite during festivals, weddings, and special celebrations.",
    ["Milk solids", "Flour", "Sugar syrup", "Cardamom", "Rose water"],
    this,
    "gulab jamun.jpg"
  );
});

document.getElementById("waffle").addEventListener("click", function () {
  showDetails(
    "Waffle",
    "Waffles are crispy on the outside and soft on the inside, perfect with syrup or ice cream. Waffles are a classic breakfast and dessert favorite.They are light, fluffy inside and golden, crispy outside.Perfect with maple syrup, chocolate, or fresh fruits.Loved by people of all ages around the world.Every bite feels warm, comforting, and delicious. ",
    ["Flour", "Eggs", "Milk", "Butter", "Sugar"],
    this,
    "waffle.jpeg"
  );
});
