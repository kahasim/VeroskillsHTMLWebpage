const message = 'Hello Javascript world' // Try edit me

// Update header text
document.querySelector('#header').innerHTML = message
 const myList = document.querySelector('ul')
 const body = document.querySelector('body')
 body.style.border = '10px dashed black'
 const newH3 = document.createElement('h3')
  newH3.setAttribute('class', 'math')
  newH3.textContent = 'MATH'
, newH3.style.color = 'lightblue'
  body.appendChild(newH3)
  const h1Nodes = document.querySelectorAll('h1')
  console.log(h1Nodes)
  
  const h1 = Array.from(h1Nodes)
  console.log(h1)
  console.log(h1.map(val => val))

  const topics = ['String','Number','Boolean','Function','Array','Object']
 for(let i = 0; i < topics.length; i++){
  console.log(myList[i])

  const newElement = document.createElement('h3')
  newElement.textContent = topics[i]
  body.appendChild(newElement)
 }
 newH3.style.backgroundColor = 'black'

 function createAndRender(tagName,attributesObj, text){
  const myTag = document.createElement(tagName)
  myTag.append(text)
  myTag.style.color = 'gray'

  for(const key in attributesObj){
    myTag.setAttribute(key,attributesObj[key])
  }
  document.body.appendChild(myTag)
 }

 createAndRender('h1', {class: 'math', id:'test-id', author:'phil'}, 'Business')
//Events Introduction

 function greetings(){
  console.log("The mouse has been clicked")
 }

 const myTag = document.querySelector('.js')

 function fs(){

  console.log("Greetings from Javascript event")
 }

 function fs2(){
  console.log("Javascript Additional Event")
 }

 myTag.addEventListener('click',fs)
 myTag.addEventListener('click',fs2)
// Log to console
console.log(message)

const green = document.querySelector('.green-border')
const black = document.querySelector('.black-border')

green.onclick=function(e){
  console.log(e.target)
}

function eventInHTML(e){
  console.log("Hello From Red")
}

function eventInJavascript(eee){
  console.log("Hello From Blue")
}

myTag.addEventListener('click', eventInJavascript)
window.addEventListener('click', function(){
  console.log("Window")
}, true)


// const blue = document.querySelector('.blue')

// const green = document.querySelector('.green')

// blue.addEventListener('click', function() {
//   console.log(blue.textContent)
// })

// green.addEventListener('click', function() {
//   console.log(green.textContent)
// })


// function handleClick(e) {
//   if (e.target.textContent.includes('Blue')) {
//     console.log(blue.textContent)
//   } else {
//     console.log(green.textContent)
//   }
// }

// document.querySelector('div').addEventListener('click', handleClick)

const score = document.querySelector('.scoreValue')

function handleClick(e){
  if(e.target.id === 'minus'){
    score.textContent--}
  else{
    score.textContent++
  }

}
function maxWin(coins){
  const n = coins.length
  //create a 2D array to store the results of subproblems
  //const twodp = new Array(n).fill(0).map(() => new Array(n).fill(0))
  const dp = new Array(n).fill(null).map(() => new Array(n).fill(0))
  console.log(dp)

  for(let i = 0; i< n; i++){
    dp[i][i] = coins[i] 
  }
  console.log(dp)

  //This loop around the outer parameter iterates over the possible lengths of the subarrays
  //which is two. Previously we implemented a loop for our base case giving a length of 1
  //
  //3.9,1,20
  for(let len = 2; len <= n; len++){
//Within the outer loop begin to create the subarrays of length 2: Ex:[a,b],[b,a]
    for(let i  = 0; i <= n - len; i++){
      //the loop starts @ 0 and less than
    }
  }
}
maxWin([3,9,1,2])
//maxWin([1,2,3,4,5,6,12,13,14])