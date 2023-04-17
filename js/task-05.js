const inputEl = document.getElementById("name-input");
const spanEl = document.getElementById("name-output");
inputEl.addEventListener("input", onInputChange);

function onInputChange(event) {
  const inputValue = event.target.value.trim();
  spanEl.textContent = inputValue ? inputValue : "Anonymous";
}
