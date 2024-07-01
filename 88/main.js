const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))

//app.get or app.post or app.put or app.delete(path,handler)
app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.get('/about', (req, res) => {
    res.send('Hello World!2')
})
app.get('/contact', (req, res) => {
    res.send('Hello World!3')
})

// app.get('/blog/intro-to-js', (req, res) => {
//     //logic to fetch intro to js from the db
//     res.send('welcome to JS')
// })
// app.get('/blog/intro-to-py', (req, res) => {
//     //logic to fetch intro to python from the db
//     res.send('welcome to Python')
// })

app.get('/blog/:slug', (req, res) => {
    // logic to fetch intro to {slug} from the db
    // For URL:"http://127.0.0.1:3000/blog/intro-to-Hisham?mode=dark&region=in"
    console.log(req.params);//will output { slug: 'intro-to-Hisham' }
    console.log(req.query);//will output { slug: 'intro-to-Hisham' }
    res.send(`welcome to ${req.params.slug} `)
})
// app.get('/blog/:slug/:second', (req, res) => {
//     // logic to fetch intro to {slug} from the db
//     res.send(`welcome to ${req.params.slug} and  ${req.params.second}`)
// })

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})