const express=require("express")
const router=express.Router();


const Action = require("../models/action.module");


router.get("",async function(req,res){
  try{  
    const action= await Action.find().lean().exec();
    return res.send(action)
}
    catch(err){
        res.send(err.message)
    }
})

router.post("/add",async function(req,res){
   try{ 
    const action= await Action.create(req.body);
    return res.send(action)}
    catch(err){
        res.send(err.message)
    }
})

router.get("/name",async function(req,res){
    try {
        const action = await Action.find().lean().exec()
        var data = [];
        action.forEach((el) => {
          
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