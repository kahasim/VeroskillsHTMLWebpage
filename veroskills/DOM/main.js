//Final Form challenge!
// Make it so that ALL input fields on the form can remember current user values
// if he/she accidently refreshes the page

setInterval(() => document.querySelector('h2').textContent++ , 1000)

const allTextInputs = document.querySelectorAll('input[type=text]')
const allRadioInputs = document.querySelectorAll('input[type=radio]')

const nameField = document.querySelector('#name')
const jobField = document.querySelector('#job')

for (const input of allTextInputs) {
  input.oninput = handleTextInputs
}

// for (const radioInput of allRadioInputs) {
//   radioInput.onchange = handleRadioInputs
// }

function handleTextInputs(e) {
  if (e.target.previousElementSibling.textContent.includes('Name')) {
      sessionStorage.setItem('userName', e.target.value)
  } else {
    sessionStorage.setItem('userJob', e.target.value)
  }
}

// function handleRadioInputs(e) {
//   for (let i = 0; i < allRadioInputs.length; i++) {
//     if (allRadioInputs[i].checked) {
//       sessionStorage.setItem('index', i)
//     }
//   }
// }


document.body.onload = function() {
  if (sessionStorage.length > 1) {
    nameField.value = sessionStorage.getItem('userName')
    jobField.value = sessionStorage.getItem('userJob')
    allRadioInputs[sessionStorage.getItem('index')].checked = true
  }
}
