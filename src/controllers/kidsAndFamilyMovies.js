const express=require("express")
const router=express.Router();


const KidsAndFamilyMovies =require("../models/kidsAndFamilyMovies.module")


router.get("",async function(req,res){
  try{  
    const kidsAndFamilyMovies= await KidsAndFamilyMovies.find().lean().exec();
    return res.send(kidsAndFamilyMovies)
}
    catch(err){
        res.send(err.message)
    }
})

router.post("/add",async function(req,res){
   try{ 
    const kidsAndFamilyMovies= await KidsAndFamilyMovies.create(req.body);
    return res.send(kidsAndFamilyMovies)}
    catch(err){
        res.send(err.message)
    }
})

router.get("/name",async function(req,res){
    try {
        const kidsAndFamilyMovies = await KidsAndFamilyMovies.find().lean().exec()
        var data = [];
        kidsAndFamilyMovies.forEach((el) => {
          
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