//ECMA: European Computer Manufacturers Associations
//caniuse.com
//Transpile

//console.log("Hi from JavaScript")
let arr = new Array;
console.log(typeof arr);

//Pass by reference - mutable 
// let a = {name: 'Terry'};
// let b = a;
// b.name = 'Jerry';
// console.log(a);

//Mutable vs. Immutable
//static is immutable(primitive types)
//Coercion
//Explicit(type casting
//Implicit ==,+
//toString, toBoolean, toNumber

let res = 1 + "1"
console.log(typeof res, res)

class Person {
    constructor(nameIn,ageIn){
        this.name = nameIn;
        this.age = ageIn;
    }
    getAge(){
      return  this.age
    }
}

const student = new Person("Bob",21)
console.log(student)
console.log(student.getAge())

//arrow function const myFunc = (name,age) => {...  }

function functionparamenter(func){
    return func
  }
  
  function addition(a,b){
    return a+b
  }

  console.log(functionparamenter(addition))

  // const pro1 = Promise.resolve('hello')
// let counter = 0
// pro1.then((value)=>{
//     console.log(value)
// })

// const pro2 = new Promise((resolve,regject)=>{
//     resolve('Hello World')
// })

// pro1.then((value)=>{
//     console.log(value)
// })

// const pro3 = new Promise((resolve,reject)=>{
//     const val = 10
//     if(val > 50){
//         resolve()
//     }else{
//         reject('Low Values')
//     }
// })

// // pro3.then(output => {
// //     console.log(output)
// // }),(error) =>{
// //     console.error(error)
// // }

// const pro4 = new Promise((resolve,reject)=>{
//     resolve('ready')
// }).then(value =>{
//     counter++
//     console.log(value)
// })


// const A = () => {
//     setTimeout(() =>{
//       console.log("A")
//     }, 1000)
//   }
  
//   const B = () => {
//     setTimeout(() =>{
//       console.log("B")
//     }, 500)
//   }
  
//   const C = () => {
//     setTimeout(() =>{
//       console.log("C")
//     }, 300)
//   }

//   A()
//   B()
//   C()
//callback hell
//callback() =>{
//     callback2()=>{
//         callback3()=>{
//             ...
//         }
//     }
// }
// let resA = ''
// let resB = ''

// const D = () => {
//     setTimeout(() =>{
//       console.log("In the first layer")
//       resA = 'A'

//       setTimeout((res) => {
//         resB = res + 'B'
//         console.log(`In the seccond layer, ${resB}`)
//       }, 500, resA)

//     }, 1000)
//   }
//   D()

//Promise -- object 
//Three state: pending, fulfilled, rejected
// const promise = new Promise((resolve, reject) => {
//     let indicator = true
//     if(indicator){
//         let data = "success"
//         resolve(data)
//     }
//     else{
//         let error = "failed"
//         reject(error)
//     }
// })
// function getUser(userID){
//     return new Promise((resolve,reject) =>{
//         setTimeout((id) => {
//             if(id){
//                 resolve({id: id, name: "Huey"})
//             }else{
//                 reject("Invalid user ID")
//             }
//         }, 1000, userID)
//     })
// }
// .then() to catch data //.catch to catch error //.finally
// getUser(1).then((user)=>{
//     console.log("User: ", user)
// }).catch((err) => {
//     console.log("Error: ",err)
// }).finally(() => {
//     console.log("Operation Completed")
// })
// const newPromise = Promise.resolve("correct message")
// newPromise.then((res)=>{
//     console.log(res)
// }).catch((err)=>{
//     console.log(err)
// })

//Fetch
// fetch('https://jsonplaceholder.typicode.com/todos/1')//, {
// //     method: 'POST'
// // })
//       .then((res) =>{
//         if(!res.ok){
//             throw new Error("Request failed")}
//             return res.json()
//       }).then((data) =>{
//         console.log("Fetched data: ", data)
//       }).catch((err) =>{
//         console.log("Error: ", err)
//       })

// const promise2 = new Promise((resolve, reject) => {
//     console.log("Begin")
//     let indicator = true
//     if(indicator){
//         resolve("original data")
//     }
//     else{
//         reject("error at step 1")
//     }
// })

// promise2.then((res) => {
//     console.log("Input at step 2 ",res)
//     return"Data at step 2"
// }).then((res) => {
//     console.log("Input at step 3 ",res)
//     return"Data at step 3"
// })

//async / await
// async function fetchData(){
//  try{   console.log("This is ran synchronously")
//  const response = await fetch('https://jsonplaceholder.typicode.com/todos/1', {method: 'POST'})
//  console.log('Status: ', response.status)
//  const data = await response.json()
//  console.log("Fetched data ", data)}
//  catch (err){
//     console.log("Error when fetching data, ", err)
//  }
// }
// fetchData()
