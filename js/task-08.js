const form = document.querySelector('.login-form')

form.addEventListener("submit", submitPage)

function submitPage(event) {
    event.preventDefault()

if (form.email.value === '' || form.password.value === '') {
    alert('Всі поля повинні бути заповнені!')
} 

console.log(
`Email: ${form.email.value} 
Password: ${form.password.value}`
)

event.currentTarget.reset()
}