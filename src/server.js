const express = require('express');
const connect = require('./configs/db')
const app = new express();
// const bodyParser = require("body-parser");
// const session = require('express-session');
// const flash = require('connect-flash');

app.use(express.json());

app.listen(5000, async () => {
    await connect();
    console.log("Listening on port 5000");
});


