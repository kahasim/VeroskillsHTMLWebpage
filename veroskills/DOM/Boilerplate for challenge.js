
// Make sure to research what you're not sure about!
// ALL INPUT FIELDS must retain user-inputs after refresh (counter should reset to zero)
setInterval(() => document.querySelector('h2').textContent++ , 1000)
const allTextInputs = document.querySelectorAll('input[type=text]')
const allRadioInputs = document.querySelectorAll('input[type=radio]')


const nameField = document.querySelector('#name')
const jobField = document.querySelector('#job')
