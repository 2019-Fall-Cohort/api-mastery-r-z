
const RecipeModel = require("../models/recipe-model");

module.exports = {
  add(name, image, callback) {
    const newRecipe = new RecipeModel({name, image});
    newRecipe.save().then(callback);
  },
  delete(recipeId, callback) {
    RecipeModel.deleteOne(recipeId).then(callback);
  },
  findAll(callback) {
    RecipeModel.find().then(callback);
  },
  findOne(recipeId, callback) {
    RecipeModel.findById(recipeId).then(callback);
  },
  updateField(recipeId, update, callback) {
    RecipeModel.findByIdAndUpdate(recipeId, update, {new: true}).then(callback);
  }
};
