const express = require('express');
const connect = require('./configs/db')
const app = new express();
// const bodyParser = require("body-parser");
// const session = require('express-session');
// const flash = require('connect-flash');

app.use(express.json());

const signupcontroller = require("./controllers/signupData");
const moviesDatacontroller = require("./controllers/moviesData");
const recommendedcontroller = require("./controllers/recommended");
const popularMoviescontroller = require("./controllers/PopularMovies");
const actioncontroller = require("./controllers/action");
const kidsAndFamilyMoviescontroller = require("./controllers/kidsAndFamilyMovies");


app.use("/users", signupcontroller);
app.use("/prime", moviesDatacontroller);
app.use("/continue", recommendedcontroller);
app.use("/kids", kidsAndFamilyMoviescontroller);
app.use("/OriginalMovies", popularMoviescontroller);
app.use("/action", actioncontroller);

app.listen(5000, async () => {
    await connect();
    console.log("Listening on port 5000");
});


