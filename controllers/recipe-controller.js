const RecipeService = require("../services/artists-services");

module.exports = {
  addNewRecipe(req, res) {
    const { name, image } = req.body;

    RecipeService.add(name, image, response => {
      res.json({ response });
    
    console.log({response})
    });
  },

  getAllRecipes(req, res) {
    RecipeService.findAll(Recipes => {
      res.json({ Recipes });
    });
  }
};