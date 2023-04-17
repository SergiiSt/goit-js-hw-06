const categoriesList = document.getElementById("categories");
const newArray = categoriesList.children;
console.log(`Number of categories: ${newArray.length}`);
const subCatList = categoriesList.querySelectorAll(".item");
subCatList.forEach((item) => {
  const elementName = item.firstElementChild.textContent;
  const elementsCount = item.lastElementChild.children.length;
  console.log(`Category: ${elementName}`);
  console.log(`Elements: ${elementsCount}`);
});