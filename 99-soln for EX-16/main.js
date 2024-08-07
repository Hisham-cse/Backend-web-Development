const express = require('express')
const app = express()
const mongoose = require('mongoose');
const Employee = require('./models/Employee');

mongoose.connect('mongodb://localhost:27017/company');

const port = 3000

app.set('view engine', 'ejs');


const getRandom = (arr)=>{
    let rno = Math.floor(Math.random() * (arr.length-1));
    return arr[rno];
}


app.get('/', (req, res) => {
    res.render('index');
})

app.get('/generate',async (req, res) => {
    //Clear all Collection Employee
    await Employee.deleteMany({});
    //generate Random data
    let randomLang=["python","java","c++","c","javascript","ruby","php","go","kotlin","swift"]
    let randomNames=['rohan','harry','john','jane','josh','joe','jim','jimmy','jimmy','jimmy']
    let randomCities=["Bengaluru","Mangaluru","Chennai","Hyderabad","Delhi","Kolkata","Pune","Jaipur","Lucknow","Kochi"]
    for (let index = 0; index < 10; index++) {
        let e =await Employee.create({
            name: getRandom(randomNames),
            salary: Math.floor(Math.random()*22000),
            language: getRandom(randomLang),
            city: getRandom(randomCities),
            isManager: (Math.random() >0.5) ? true : false
        });
        console.log(e);
    }
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})