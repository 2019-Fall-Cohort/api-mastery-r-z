const mongoose = require("mongoose");

// const Recipe = mongoose.model(
//     "Recipe",
//     new mongoose.Schema({
//         name: String,
//         image: String
//     })
// )


const Recipe = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    
    image: {
        type: String
    }
    
});
    module.exports = mongoose.model('Recipe', Recipe);