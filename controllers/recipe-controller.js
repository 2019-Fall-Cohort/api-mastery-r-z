const RecipeService = require("../services/recipe-service");

module.exports = {
  
  addNewRecipe(req, res) {

    const { name, image } = req.body;

    RecipeService.add(name, image, response => {
      console.log("waiting for promise...")
      res.json({ response });
    
      // console.log({response})
    })
  },

  deleteRecipe(req, res) {

    const recipeId = req.body;

    RecipeService.delete(recipeId, response => {
      res.json({ response })
    })
  },


  getAllRecipes(req, res) {
    RecipeService.findAll(Recipes => {
      res.json({ Recipes });
    });
  },


};