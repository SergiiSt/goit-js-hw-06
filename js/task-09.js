function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const spanColorEl = document.querySelector('.color');
const changeColoprBtn = document.querySelector('.change-color');
const bodyEl = document.querySelector('body');

changeColoprBtn.addEventListener('click', () => {
  spanColorEl.textContent = getRandomHexColor();
  bodyEl.style.backgroundColor = spanColorEl.textContent;
})
