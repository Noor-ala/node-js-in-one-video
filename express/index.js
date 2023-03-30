const express = require("express");
console.log(express);
const app = express()

app.get("/",(req,res)=>{
    res.send("hi this is first express route")

})
app.get("/about",(req,res)=>{
    res.send("hi this is first express about route")

})
app.get("/download",(req,res)=>{
    res.send("download file")

})
app.listen(3000,()=>{
    console.log("server established");
})