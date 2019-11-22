var express = require('express');
var router = express.Router();
const recipeController = require("../controllers/recipe-controller")

/* GET all recipes */
router.get('/recipes', recipeController.getAllRecipes);

router.get('/:id', recipeController.getRecipe);

router.patch('/:id', recipeController.updateRecipe);

router.post('/recipes', recipeController.addNewRecipe);

router.delete('/', recipeController.deleteRecipe);

module.exports = router;
