const mongoose = require("mongoose");

const popularMoviesSchema = new mongoose.Schema({
    popularMovies: [{ type: Object, required: true }],
   
}, {
    versionKey: false,
    timestamps: true
});

const PopularMovies = mongoose.model("popularMovies", popularMoviesSchema);

module.exports = PopularMovies;