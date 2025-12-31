const Recipes = require('../models/Recipes');

/* CREATE */
const createRecipes = async (req, res) => {
  try {
    console.log(req.body);
    const recipe = new Recipes(req.body);
    const savedRecipe = await recipe.save();

    res.status(201).json({
      message: 'Recipe created successfully',
      data: savedRecipe
    });
  } catch (error) {
    res.status(500).json({
      message: 'Creating recipe failed',
      error: error.message
    });
  }
};

/* READ ALL */
const getAllRecipes = async (req, res) => {
  try {
    const recipes = await Recipes.find();
    res.status(200).json(recipes);
  } catch (error) {
    res.status(500).json({
      message: 'Fetching recipes failed',
      error: error.message
    });
  }
};

/* READ BY ID */
const getRecipeById = async (req, res) => {
  try {
    const recipe = await Recipes.findById(req.params.id);

    if (!recipe) {
      return res.status(404).json({ message: 'Recipe not found' });
    }

    res.status(200).json(recipe);
  } catch (error) {
    res.status(400).json({
      message: 'Invalid recipe ID',
      error: error.message
    });
  }
};

/* UPDATE */
const updateRecipe = async (req, res) => {
  try {
    const updatedRecipe = await Recipes.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!updatedRecipe) {
      return res.status(404).json({ message: 'Recipe not found' });
    }

    res.status(200).json({
      message: 'Recipe updated successfully',
      data: updatedRecipe
    });
  } catch (error) {
    res.status(400).json({
      message: 'Updating recipe failed',
      error: error.message
    });
  }
};

/* DELETE */
const deleteRecipe = async (req, res) => {
  try {
    const deletedRecipe = await Recipes.findByIdAndDelete(req.params.id);

    if (!deletedRecipe) {
      return res.status(404).json({ message: 'Recipe not found' });
    }

    res.status(200).json({ message: 'Recipe deleted successfully' });
  } catch (error) {
    res.status(400).json({
      message: 'Deleting recipe failed',
      error: error.message
    });
  }
};

module.exports = {
  createRecipes,
  getAllRecipes,
  getRecipeById,
  updateRecipe,
  deleteRecipe
};
