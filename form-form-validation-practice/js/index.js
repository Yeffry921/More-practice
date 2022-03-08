const form = document.querySelector('.hero__form form');
const firstName = document.querySelector('.firstName')
const lastName = document.querySelector('.lastName')
const email = document.querySelector('.email')
const password = document.querySelector('.password')



form.addEventListener('submit', (e) => {
  e.preventDefault()

  validateInputs();
})

const setError = (element, message) => {
  const inputControl = element.parentElement
  const errorDisplay = inputControl.querySelector('.error-message')

  errorDisplay.textContent = message
  element.classList.add('error-field')
}

const setSuccess = (element) => {
  const inputControl = element.parentElement
  const errorDisplay = inputControl.querySelector('.error-message')

  errorDisplay.textContent = ''
  element.classList.remove('error-field')
}

const validateInputs = () => {
  const firstNameValue = firstName.value.trim()
  const lastNameValue = lastName.value.trim()
  const emailValue = email.value.trim()
  const passwordValue = password.value.trim()
  const emailReg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if(firstNameValue === '') {
    setError(firstName, 'First Name cannot be empty')
  } else {
    setSuccess(firstName)
  }


  if(lastNameValue === '') {
    setError(lastName, 'Last Name cannot be empty')
  } else {
    setSuccess(lastName)
  }


  if(emailValue === '') {
    setError(email, 'Looks like email is empty')
  } else if(emailValue.match(emailReg)) {
    setSuccess(email)
  } 

  if(passwordValue === '') {
    setError(password, 'Password cannot be empty')
  } else {
    setSuccess(password)
  }

}  


