const RecipeDomain = require("../models/recipe-domain");
const RecipeModel = require("../models/recipe-model");

module.exports = {
  add(name, image, callback) {
    const newRecipe = new RecipeModel(newRecipeDomain(name, image));
    newRecipe.save().then(callback);
  },
  findAll(callback) {
    RecipeModel.find().then(callback);
  }
};