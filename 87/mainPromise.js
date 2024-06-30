import fs from "fs/promises"
let a = await fs.readFile("Hisham.txt")
let b= await fs.appendFile("Hisham.txt",'\n\n\n\nThis is amazing promise')
console.log(a.toString(),b);


//nodejs tutorial node.js File Paths