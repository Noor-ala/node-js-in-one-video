const http = require('http');
const server = http.createServer((req,res)=>{
    if(req.url=="/"){ 
        res.end("hi this is my first node js server");  
    }
   else if(req.url==="/download"){
    res.end("hi this is my first download page");  
   }
   else if(req.url==="/About"){
    res.end("hi this is my first About page");  
   }
   else{
    res.end("404: page could not found");
   }
})

server.listen(3000,()=>{
    console.log("server listening on port no 3000");
})