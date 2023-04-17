const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.getElementById("ingredients");
const ingItemEl = ingredients
  .map((ingridient) => `<li>${ingridient}</li>`)
  .join(" ");
list.insertAdjacentHTML("afterbegin", ingItemEl);
