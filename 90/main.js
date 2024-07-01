const express = require('express')
const app = express()
const port = 3000
const blog = require('./routes/blog')
const fs = require("fs")


app.use('/blog', blog)

// app.use(express.static("public"))

//Middleware 1-Logger for our application

app.use((req, res, next) => {
    // console.log('m1');
    console.log(req.headers);
    req.harry = "I am Hisham";
    fs.appendFileSync("logs.txt",`${Date.now()}is a ${req.method}\n`)
    console.log(`${Date.now()}is a ${req.method}`)
    // res.send("Hacked by Middleware 1")
    next()
})

//Middleware 2

app.use((req, res, next) => {
    console.log('m2')
    req.harry = "I am Harry";
    next()
})
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/about', (req, res) => {
    res.send('Hello about!'+ req.harry)
})

app.get('/contact', (req, res) => {
    res.send('Hello contact!')
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
//Middleware=it will modify the request