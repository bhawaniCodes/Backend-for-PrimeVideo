const mongoose = require("mongoose");

const signupDataSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    payment: { type: Boolean, required: true },
    wishList: [{ type: Object, required: true }],
    continueWatching:[{type:Object,required:true}],
}, {
    versionKey: false,
    timestamps: true
});

const Signup = mongoose.model("signupdata", signupDataSchema);

module.exports = Signup;