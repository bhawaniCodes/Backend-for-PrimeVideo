const express=require("express")
const router=express.Router();


const Movies =require("../models/movies.model")


router.get("", async function (req, res) {
  try{  
      const movies = await Movies.find().lean().exec(); 
    return res.send(movies)
}
  catch (err) {
        res.send(err.message)
    }
})

router.post("/add",async function(req,res){
   try{ 
    const movies= await Movies.create(req.body);
    return res.send(movies)}
    catch(err){
        res.send(err.message)
    }
})

router.get("/name",async function(req,res){
    try {
        const movies = await Movies.find().lean().exec()
        var data = [];
        movies.forEach((el) => {
          
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