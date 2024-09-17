const http = require('http') 
const fs = require('fs')
const homePage=fs.readFileSync('index.html')
const aboutPage=fs.readFileSync('about.html')
const contactPage=fs.readFileSync('contact.html')
const notFoundPage=fs.readFileSync('notfound.html')

const server = http.createServer((req, res) =>{ 
    // console.log(req.url) 
    // res.end('Hello Node.js') 
if(req.url === '/about')
 res.end(aboutPage) 
else if(req.url === '/contact') 
res.end('The contact page') 
else if(req.url === '/') 
res.end(homePage)        
else { res.writeHead(404) 
    res.end('page not found')
}
})
// server.listen(3000)

const express = require('express')
//calls express functionto start new Express app
const app = express()
const path = require('path')
app.use(express.static('public'))

app.listen(3000,()=>{
    console.log("App listening on port 3000")
})

app.get('/',(req,res)=>{
    res.json({
        name: 'Greg Lim'
    })
})

app.get('/about',(req,res)=>{
    res.json({
        name: 'About Greg Lim'
    })
})


app.get('/',(req,res) => {
    res.sendFile(path.resolve(__dirname,'index.html'))
})

app.get('/about',(req,res) => {
    res.sendFile(path.resolve(__dirname,'about.html'))
})

app.get('/contact',(req,res) => {
    res.sendFile(path.resolve(__dirname,'contact.html'))
})
