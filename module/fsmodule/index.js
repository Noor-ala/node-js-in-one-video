const fs = require("fs");
//non blockig io model
//fs.writeFile("file.txt","data is added to file",()=>{
  //  console.log("data is succesfully added");
//});
const b =fs.writeFileSync("file2.txt","data entered");
console.log(b);
console.log("simply js subscribe");
fs.readFile("file.txt","utf-8",(err,data)=>{
    console.log(data);
});
fs.appendFile("file.txt","data is not dllvmlddfl",(err)=>{
console.log(err);
})
//fs.rename("file.txt","pathan.txt",(err)=>{
  //  console.log(err);
//})
fs.unlinkSync("pathan.txt");