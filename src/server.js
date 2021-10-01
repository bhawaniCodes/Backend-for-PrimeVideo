const express = require('express');
const connect = require('./configs/db')
const app = new express();
// // const bodyParser = require("body-parser");
// // const session = require('express-session');

app.use(express.json());
const signupcontroller = require("./controllers/signupData");
const moviesDatacontroller = require("./controllers/moviesData");
const recommendedcontroller = require("./controllers/recommended");
const popularMoviescontroller = require("./controllers/PopularMovies");
const actioncontroller = require("./controllers/action");
const kidsAndFamilyMoviescontroller = require("./controllers/kidsAndFamilyMovies");


app.use("/users", signupcontroller);
app.use("/prime", moviesDatacontroller);
app.use("/recommended", recommendedcontroller);
app.use("/kidsAndFamilyMovies", kidsAndFamilyMoviescontroller);
app.use("/popularMovies", popularMoviescontroller);
app.use("/action", actioncontroller);


app.listen(5000, async () => {
    await connect();
    console.log("Listening on port 5000");
});


