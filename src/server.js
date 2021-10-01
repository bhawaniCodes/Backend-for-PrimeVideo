const express = require('express');
const connect = require('./configs/db')
const app = new express();
// // const bodyParser = require("body-parser");
// // const session = require('express-session');

app.use(express.json());

const testRoute = require('./routes/test.route')
app.use('/user', testRoute);


app.listen(5000, async () => {
    await connect();
    console.log("Listening on port 5000");
});


