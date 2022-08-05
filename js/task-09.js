const changeColorEl = document.querySelector('.change-color')
const bodyEl = document.querySelector('body')
const newColor = document.querySelector('.color')

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


changeColorEl.addEventListener('click', () => {
  bodyEl.style.backgroundColor = getRandomHexColor()
  newColor.innerHTML = `${getRandomHexColor()}`
  console.log(getRandomHexColor())
  })





