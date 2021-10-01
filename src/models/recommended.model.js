const mongoose = require("mongoose");

const recommendedSchema = new mongoose.Schema({
    recommended: [{ type: Object, required: true }],
   
}, {
    versionKey: false,
    timestamps: true
});

const Recommended = mongoose.model("recommended", recommendedSchema);

module.exports = Recommended;