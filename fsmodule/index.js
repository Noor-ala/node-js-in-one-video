const fs = require("fs");
//non blocking io model
//fs.writeFile("file.txt","data is added to file",()=>{
  //  console.log("data is successfully added");
//})

const b = fs.writeFileSync("file2.txt", "data enter")
console.log(b);
console.log("i am noor");
fs.readFile("flie.txt","utf-8",(err,data)=>{
    console.log(data);
})
fs.appendFile("file.txt","data is changed in this file",(err)=>{
    console.log(err);
})
//fs.rename("file.txt","pathan.txt",(err)=>{
//  console.log(err);
//})

fs.unlinkSync("pathan.txt")