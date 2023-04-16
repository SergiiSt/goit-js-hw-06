const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

for (const ingridient of ingredients) {
  const ingItemEl = document.createElement("li");
  ingItemEl.textContent = ingridient;
  ingItemEl.classList = "item";
  console.log(ingItemEl);
  const list = document.getElementById('ingredients')
  list.append(ingItemEl)
}
