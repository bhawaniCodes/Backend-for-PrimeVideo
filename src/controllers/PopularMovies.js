const express=require("express")
const router=express.Router();


const PopularMovies = require("../models/PopularMovies.module");


router.get("",async function(req,res){
  try{  
    const popularMovies= await PopularMovies.find().lean().exec();
    return res.send(popularMovies)
}
    catch(err){
        res.send(err.message)
    }
})

router.post("/add", async function (req, res) {
    console.log(req.body);
   try{ 
    const popularMovies= await PopularMovies.create(req.body);
    return res.send(popularMovies)}
    catch(err){
        res.send(err.message)
    }
})

router.get("/name",async function(req,res){
    try {
        const popularMovies = await PopularMovies.find().lean().exec()
        var data = [];
        popularMovies.forEach((el) => {
          
            if (el.name[0] == req.query.search) {
                data.push(el);
            }
        });  
        return res.send(data)
    }
    catch(err){
        res.send(err.message)
    }
})



module.exports = router;