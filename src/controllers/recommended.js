const express=require("express")
const router=express.Router();


const Recommended =require("../models/recommended.model")


router.get("",async function(req,res){
  try{  
    const recommended= await Recommended.find().lean().exec();
    return res.send(recommended)
}
    catch(err){
        res.send(err.message)
    }
})

router.post("/add",async function(req,res){
   try{ 
    const recommended= await Recommended.create(req.body);
    return res.send(recommended)}
    catch(err){
        res.send(err.message)
    }
})

router.get("/name",async function(req,res){
    try {
        const recommended = await Recommended.find().lean().exec()
        var data = [];
        recommended.forEach((el) => {
          
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