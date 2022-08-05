const input = document.querySelector('input')
const span = document.querySelector('span')

input.addEventListener('input', fontSizeControl)

function fontSizeControl(event) {
    console.log(event.currentTarget.value)
    span.style.fontSize = `${event.currentTarget.value}px`
}