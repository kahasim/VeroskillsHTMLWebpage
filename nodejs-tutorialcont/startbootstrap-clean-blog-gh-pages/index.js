const http = require('http') 
const fs = require('fs')
//const homePage=fs.readFileSync('index.html')
// const aboutPage=fs.readFileSync('about.html')
// const contactPage=fs.readFileSync('contact.html')
//const notFoundPage=fs.readFileSync('notfound.html')

// const server = http.createServer((req, res) =>{ 
//     // console.log(req.url) 
//     // res.end('Hello Node.js') 
// if(req.url === '/about')
//  res.end(aboutPage) 
// else if(req.url === '/contact') 
// res.end('The contact page') 
// else if(req.url === '/') 
// res.end(homePage)        
// else { res.writeHead(404) 
//     res.end('page not found')
// }
// })
//  server.listen(3000)


const express = require('express')
const app = new express()
app.listen(4000,()=>{
    console.log('App listening on port 4000')
})

