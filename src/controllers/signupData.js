const express = require("express");

const router = express.Router();

const Signup = require("../models/signup.model");


router.post("/signup", async function (req, res) {
    console.log(req.body);
    try {
        const signup = await Signup.create(req.body);
        return res.send(signup);
    }
    catch {
        return res.send(err.message);
    }
});


router.get("/logindata/:id", async function (req, res) {
    try {
        let signup = await Signup.find().lean().exec()

        
        signup.forEach((el) => {
            if (el.email == req.params.id) {
                signup = el;
            }
        })
         
        return res.send(signup);
    }
    catch {
        return res.send(err.message);
    }
});



module.exports = router;

