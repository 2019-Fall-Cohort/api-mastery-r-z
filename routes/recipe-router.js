var express = require('express');
var router = express.Router();
const recipeController = require("../controllers/recipe-controller")

/* GET all recipes */
router.get('/', recipeController.getAllRecipes);

router.get('/:id', recipeController.getRecipe);

router.patch('/:id', recipeController.updateRecipe);

router.post('/', recipeController.addNewRecipe);

router.delete('/', recipeController.deleteRecipe);

module.exports = router;
