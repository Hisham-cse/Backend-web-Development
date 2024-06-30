const fs =require("fs")
//const fs= require("fs/promises")

// console.log(fs);

console.log('starting');
// fs.writeFileSync("Hisham.txt","Hisham is a good boy")
fs.writeFile("Hisham2.txt","Hisham2 is a intelligent guy",()=>{
    console.log("done");
    fs.readFile("Hisham2.txt",(error,data)=>{
        console.log(error,data.toString());
    })
})
fs.appendFile("Hisham.txt","Hishamrobo ",(e,d)=>{
    console.log(d);
})
console.log('ending');