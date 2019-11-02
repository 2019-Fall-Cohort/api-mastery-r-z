var express = require('express');
var router = express.Router();
const recipeController = require("../controllers/recipe-controller")

/* GET all recipes page. */
router.get('/', recipeController.getAllRecipes);

router.post('/', recipeController.addNewRecipe);

module.exports = router;
