// const { createServer } = require('node:http');
// const fs =require("fs")

// using require we import the modules

// import http from "http"
//we can use import intsead of require

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/html');
//   res.end('<h1>Hello World</h1>');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// // });

// import {a,b,d,f} from "./my.js"
// console.log(a+b,d,f);

// import obj from "./my.js"
// console.log(obj);

const h = require("./modue.js")
console.log(h,__dirname,__filename);

(function(exports,require,module,__dirname,__filename){
    //module code actually lives here
})