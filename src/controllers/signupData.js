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


router.get("/logindata/:id", async function (req, res) {
    try {
        let f = false; let doc;
        let signup = await Signup.find().lean().exec()
        signup.forEach((el) => {
            if (el.email === req.params.id) {
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



module.exports = router;

