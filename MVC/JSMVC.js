//Model View Controller
//View => user interface
//Model => retrieve data, store data, modify data & update the view
//Controller => manage data & handle users' actions
timeText = document.querySelector(".time b")
inputField = document.querySelector("input")
let correctWord, timer;


//hardcoded 'https://jsonplaceholder.typicode.com/todos

//IIFE
const Api = (()=>{
    console.log("In the API")
    const url = ' https://random-word-api.herokuapp.com/word'
    async function fetchUrlAsString(url) {
        const response = await fetch(url);
        const text = await response.text();
        return text;
      }
 //return the response or promise
 let getData = fetch(url).then(res => {return res.json()})
    console.log(getData)
return{
    getData //Promise and to use .then method to get promise
 }

})()
let worddata = fetch('https://random-word-api.herokuapp.com/word').then(res => {return res.json()})
//options
const options = [
    "ballot",
    "soil",
    "legislation",
    "valley",
    "country",
    "nail",
    "piano",
    "speech",
    "efflux",
    "reason",
    "alcohol",
    "stable",
    "slice",
    "situation",
    "profession",
    "restaurant",
    "pocket",
    "satisfaction",
    "condition",
    "comfortable"
]

  //Generate random value
const generateRandomValue = (array) => Math.floor(Math.random() * array.length);
getData = "";
//Initial References
const message = document.getElementById("message");
const hintRef = document.querySelector(".hint-ref");
const controls = document.querySelector(".controls-container");
const startBtn = document.getElementById("start");
const letterContainer = document.getElementById("letter-container");
const userInpSection = document.getElementById("user-input-section");
const resultText = document.getElementById("result");
const word = document.getElementById("word");
const words = options
console.log(words)
let randomWord = "",
  displayWord = "",
  missingletters ="";
let winCount = 0,
  lossCount = 0,
  amountofunderscores = 0
  amountofmissingletters = 0;

//Block all the buttons
const blocker = () => {
    let lettersButtons = document.querySelectorAll(".letters");
    stopGame();
  };
  //Start Game
  startBtn.addEventListener("click", () => {
    controls.classList.add("hide");
    init();
  });
  //Stop Game
  const stopGame = () => {
    controls.classList.remove("hide");
  };

//Generate Word Function
const generateWord = () => {
    letterContainer.classList.remove("hide");
    userInpSection.innerText = "";
    randomWord = words[generateRandomValue(words)];
    console.log(randomWord)
    let displayItem = "";
    let underscores = [];
    for (let i = 0; i < randomWord.length; i++) {
        // Generate a random number between 0 and 1
        const random = Math.random();
        // If the random number is greater than 0.5, reveal the letter
        if (random > 0.5) {
          underscores.push(randomWord[i]);
        } else {
            missingletters += (randomWord[i])
          underscores.push("_");
        }
      }
      //console.log(underscores)
      // Join the underscores array into a string and display it

     displayWord = underscores.join(" ");
    //  randomWord.split("").forEach((value) => {
    //     displayItem += '<span class="inputSpace">_</span>'
    //   });
    amountofunderscores = displayWord.split("_")
      //Display each element as span

  userInpSection.innerHTML = displayItem
  userInpSection.innerHTML = displayWord
  userInpSection.innerHTML += `<div id='chanceCount'> ${lossCount}/5</div>`;
};

// const initTimer = maxTime => {
//     clearInterval(timer);
//     timer = setInterval(() => {
//         if(maxTime > 0) {
//             maxTime--;
//             return timeText.innerText = maxTime;
//         }
//         alert(`Times up !`);
//         Controller.init();
//     }, 1000);
// }

//IIFE
//Immediately Invoked Function Expression
//The difference between getElementByClassName only returns elements with same classname
const View = (()=>{
    let domSelector ={container: ".todo-container",
    inputBox: "#user-input",
    button: "#add-button",
    rmbutton: "#add-letter"}
    let todoContainer = document.querySelector(domSelector.container)
    const createTmp = (arr) =>{ let template = ''
    arr.forEach((todo) => {   //Data foreach to print to HTML file
        template += `
        <span>${todo.title}<br><span>`

    })
    return template
}
        //todoContainer.innerHTML = template
    const render = (ele, template) => {
        ele.innerHTML = template
    }
   // let tmp = createTmp();
    //render(domSelector, todoContainer, tmp)

    return{
        domSelector,
        createTmp,
        render}

})();

//Model
const Model = ((api, view) => {
    const {domSelector, createTmp, render} = view // Object/Function Destructuring
    const {getData} = api

    class State{
        constructor(){
            this._todoList =[]
        }

        //get current list
        get getTodoList(){ 
            return this._todoList
        }

        //set current list
        set newTodoList(newList){
            this._todoList = newList
            //Invoking functions
            let todoContainer = document.querySelector(domSelector.container)
            let tmp = createTmp(this._todoList)
            render(todoContainer, tmp)
        }
    }
    return {
        State,
        getData
    }

})(Api, View) 
const Controller = ((view, model) =>{
    const {domSelector} = view
    const {State, getData} = model

    const state = new State()
    const init = () => {
    //initTimer(30)
    //Print data
        winCount = 0;
        lossCount = 5;
        randomWord = "";
        displayWord = "";
        missingletters = "",
        word.innerText = "";
        randomHint = "";
        amountofunderscores = 0; 
        message.innerText = "";
        userInpSection.innerHTML = "";
        letterContainer.classList.add("hide");
        letterContainer.innerHTML = "";
        generateWord();

        console.log("This is random word: ",randomWord)
        console.log("This is display word: ",displayWord)
        console.log(" This is the missing letters ", missingletters)
        console.log(missingletters.length)
        console.log(amountofunderscores)
        //For creating letter buttons
        


}

    //Addevent restart game
    const addTodo = () =>{
    const btn = document.querySelector(domSelector.button)
   const sbbtn = document.querySelector(domSelector.rmbutton)
    btn.addEventListener('click', ()=>{
        init();
    })
     sbbtn.addEventListener('click', checkletter)
    
}
const checkletter = () => {
    //let userletter = inputField.value.toLowerCase();
    let userInput = document.querySelector(domSelector.inputBox)

    if(!userInput) return alert("Please enter the letter to check!");
    if(userInput !== displayWord) return alert(`Oops! ${displayWord} is not a correct word`);
    alert(`Congrats! ${displayWord.toUpperCase()} is the correct word`);
    return;
}
getData.then((data) => {
    state.newTodoList = data
})
    //wrap all functons
    const bootstrap = () => {
        
            init(),
        addTodo()
    }

    return{
        bootstrap
    }

})(View, Model)


Controller.bootstrap()

