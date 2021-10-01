const mongoose = require("mongoose");

const kidsAndFamilyMoviesSchema = new mongoose.Schema({
    kidsAndFamilyMovies: [{ type: Object, required: true }],
   
}, {
    versionKey: false,
    timestamps: true
});

const kidsAndFamilyMovies = mongoose.model("kidsAndFamilyMovies", kidsAndFamilyMoviesSchema);

module.exports = kidsAndFamilyMovies;