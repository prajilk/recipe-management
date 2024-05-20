const express = require('express');
const router = express.Router();
const { getRecipes, getRecipeById, searchRecipes } = require('../controllers/RecipesController');

router.get('/', getRecipes)
router.get('/search', searchRecipes)
router.get('/:recipeId', getRecipeById)

module.exports = router;