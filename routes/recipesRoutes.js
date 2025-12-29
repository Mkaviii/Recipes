const express = require('express');
const {
  createRecipes,
  getAllRecipes,
  getRecipeById,
  updateRecipe,
  deleteRecipe
} = require('../controllers/recipesController');

const recipesRouter = express.Router();

recipesRouter.post('/', createRecipes);       // CREATE
recipesRouter.get('/', getAllRecipes);        // READ ALL
recipesRouter.get('/:id', getRecipeById);     // READ ONE
recipesRouter.put('/:id', updateRecipe);      // UPDATE
recipesRouter.delete('/:id', deleteRecipe);   // DELETE

module.exports = recipesRouter;
