const express = require("express");
const router = express.Router();
const Signup = require("../models/signup.model");
const Login = require("../models/login.module");


router.post("/signup", async function (req, res) {
    let formData = { ...req.body, payment: false}
    try {
        let f = false;
        const checkEmail = await Signup.find().lean().exec();
        checkEmail.forEach((el) => {
            if (el.email === formData.email) {
                f = true;
            }
        })
        if (f) {
            res.send('Email already exist')
        } else {
            const signup = await Signup.create(formData);
            return res.send(signup);
        }
    }
    catch {
        return res.send(err.message);
    }
});


router.post("/logindata", async function (req, res) {
    let formData = { ...req.body };
    try {
        let f = false; let doc;
        let signup = await Signup.find().lean().exec()
        signup.forEach((el) => {
            if (el.email === formData.email && el.password === formData.password) {
                f = true;
                doc = el;
            }
        })
        if (f) {
            await Login.create(doc);
            res.send(doc)
        }
        else {
            res.send('Invalid credentials')
        }
    }
    catch(err) {
        return res.send(err.message);
    }
});

router.get('/userLoginDetail', async (req, res) => {
    let user_data = await Login.find().lean().exec();
    res.send(user_data);
})

router.delete("/userSignout", async (req, res) => {
    await Login.deleteMany();
    res.send('hello');
});

router.get('/userData:id', async (req, res) => {
    const id = req.params.id; console.log(id);
    let user_data = await Signup.findOne({_id:id}); 
    res.send(user_data);
})

router.patch("/watched:id", async function (req, res) {
    try {
        const id = req.params.id;
        const addData = req.body;
        let signup = await Signup.findOneAndUpdate({_id: id}, {$push: {wishList : addData} });
        return res.send(signup);
    }
    catch {
        return res.send(err.message);
    }
});



module.exports = router;

