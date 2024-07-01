const express = require('express');
const blog = require('./routes/blog')
const shop = require('./routes/shop')

const app = express();
const port = 3000;


// Middleware to serve static files from the 'public' directory
app.use(express.static("public"));

app.use('/blog', blog);
app.use('/shop', shop);

// Handling GET, POST, and PUT requests for the root route '/'
app.route('/')
    .get((req, res) => {
        console.log('Hey its a get request');
        res.send('Hello World2112!');
    })
    .post((req, res) => {
        console.log('Hey its a post request');
        res.send('Hello World post!');
    })
    .put((req, res) => {
        console.log('Hey its a put request');
        res.send('Hello World put!');
    });

// Handling GET request for '/index'
app.get('/index', (req, res) => {
    console.log('Hey its a index request');
    res.sendFile('templates/index.html', { root: __dirname });
});

// Handling GET request for '/api'
app.get('/api', (req, res) => {
    res.json({ a: 1, b: 2, c: 3, d: 4 ,name:["Hisham","Tom"]});
});

// Start the server
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
