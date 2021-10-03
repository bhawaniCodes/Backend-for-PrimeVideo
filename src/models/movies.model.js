const mongoose = require("mongoose");

const moviesDataSchema = new mongoose.Schema({
    
    recommended: [{ type: Object, required: true }],
    kidsAndFamilyMovies: [{ type: Object, required: true }],
    PopularMovies: [{ type: Object, required: true }],
    ActionAndAdventureMovies: [{ type: Object, required: true }],
    TeluguMovies: [{ type: Object, required: true }],
    MoviesDubbedInHindi: [{ type: Object, required: true }],
    AmazonOriginalMovies: [{ type: Object, required: true }],
    ThrillerMovies: [{ type: Object, required: true }],
    AmazonOriginalSeries: [{ type: Object, required: true }],
    HorrorMovies: [{ type: Object, required: true }],
    AllMoviesSeriesData: [{ type: Object, required: true }],
   
}, {
    versionKey: false,
    timestamps: true
});

const Movies = mongoose.model("moviesData", moviesDataSchema);

module.exports = Movies;