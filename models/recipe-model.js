const mongoose = require("mongoose");

const Recipe = mongoose.model(
    "Recipe",
    new mongoose.Schema({
        name: String,
        image: String
    })
)

module.exports = Recipe;