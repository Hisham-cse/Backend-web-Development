//CRUD Operations
use("CrudDb")

db.createCollection("courses")

// db.courses.insertOne({
//     name:"Hisham web dev free course",
//     price:0,
//     assignments:12,
//     projects:5
// })

// db.courses.insertMany([
//     {
//         "name": "Hisham web dev free course",
//         "price": 0,
//         "assignments": 12,
//         "projects": 5
//     },
//     {
//         "name": "Alice's Python free course",
//         "price": 0,
//         "assignments": 10,
//         "projects": 4
//     },
//     {
//         "name": "Bob's JavaScript free course",
//         "price": 0,
//         "assignments": 15,
//         "projects": 6
//     },
//     {
//         "name": "Charlie's C++ free course",
//         "price": 0,
//         "assignments": 8,
//         "projects": 3
//     },
//     {
//         "name": "David's Ruby free course",
//         "price": 0,
//         "assignments": 11,
//         "projects": 5
//     },
//     {
//         "name": "Eve's Swift free course",
//         "price": 0,
//         "assignments": 9,
//         "projects": 4
//     },
//     {
//         "name": "Frank's Go free course",
//         "price": 0,
//         "assignments": 13,
//         "projects": 5
//     },
//     {
//         "name": "Grace's Kotlin free course",
//         "price": 0,
//         "assignments": 14,
//         "projects": 6
//     },
//     {
//         "name": "Hank's Rust free course",
//         "price": 0,
//         "assignments": 7,
//         "projects": 3
//     },
//     {
//         "name": "Ivy's PHP free course",
//         "price": 0,
//         "assignments": 12,
//         "projects": 5
//     }
    
// ])
//read
// let a = db.courses.find({price:0})
// console.log(a);

// console.log(a.toArray());
// let b = db.courses.findOne({price:0})
// console.log(b);

//update
// db.courses.updateOne({price:0},{$set:{price:100}})
// db.courses.updateMany({price:0},{$set:{price:1000}})

//delete
db.courses.deleteMany({price:1000})