const form = document.querySelector('.login-form')

form.addEventListener("submit", submitPage)

function submitPage(event) {
event.preventDefault()

const obj = {Email: form.email.value, Password: form.password.value}

if (form.email.value === '' || form.password.value === '') {
   return alert('Всі поля повинні бути заповнені!')
} else console.log(obj)
    
event.currentTarget.reset()
}