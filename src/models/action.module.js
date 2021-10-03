const mongoose = require("mongoose");

const actionSchema = new mongoose.Schema({
    action: [{ type: Object, required: true }],
   
}, {
    versionKey: false,
    timestamps: true
});

const action = mongoose.model("action", actionSchema);

module.exports = action;