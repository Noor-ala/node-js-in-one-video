function agedetector(req,res,next)
{
    if(req.query.age>18){
        next();
       
    }
    else{
        res.send("you can not eccess this website");
    }
}
module.exports =agedetector;