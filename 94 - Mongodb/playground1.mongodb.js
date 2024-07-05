
// Select the database to use.
use('SigmaDatabase');

// Insert a few documents into the courses collection.
db.getCollection('courses').insertMany([
    {
        "name": "Java",
        "price": 20000,
        "Instructor": "Harry"
      },
      {
        "name": "Python",
        "price": 18000,
        "Instructor": "Alice"
      },
      {
        "name": "JavaScript",
        "price": 22000,
        "Instructor": "Bob"
      },
      {
        "name": "C++",
        "price": 21000,
        "Instructor": "Charlie"
      },
      {
        "name": "Ruby",
        "price": 19000,
        "Instructor": "David"
      },
      {
        "name": "Swift",
        "price": 23000,
        "Instructor": "Eve"
      },
      {
        "name": "Go",
        "price": 20000,
        "Instructor": "Frank"
      },
      {
        "name": "Kotlin",
        "price": 24000,
        "Instructor": "Grace"
      },
      {
        "name": "Rust",
        "price": 25000,
        "Instructor": "Hank"
      },
      {
        "name": "PHP",
        "price": 17000,
        "Instructor": "Ivy"
      },
      
]);


// Print a message to the output window.
console.log(`$Done Inserting data`);

