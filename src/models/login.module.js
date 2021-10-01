const mongoose = require("mongoose");

const loginSchema = mongoose.Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true },
        password: { type: String, required: true },
    },
    { timestamps: true, versionKey: false }
);

const Login = mongoose.model('login', loginSchema);

module.exports = Login;