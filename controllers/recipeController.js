const Recipe = require('../models/Recipe');

/**
 * @desc    Create a new recipe
 * @route   POST /recipes
 */
exports.createRecipe = async (req, res) => {
  try {
    const recipe = new Recipe(req.body);
    const savedRecipe = await recipe.save();
    res.status(201).json(savedRecipe);
  } catch (error) {
    res.status(400).json({
      message: 'Error creating recipe',
      error: error.message
    });
  }
};

/**
 * @desc    Get all recipes
 * @route   GET /recipes
 */
exports.getAllRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.find();
    res.status(200).json(recipes);
  } catch (error) {
    res.status(500).json({
      message: 'Error fetching recipes',
      error: error.message
    });
  }
};

/**
 * @desc    Get recipe by ID
 * @route   GET /recipes/:id
 */
exports.getRecipeById = async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id);

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

/**
 * @desc    Update recipe
 * @route   PUT /recipes/:id
 */
exports.updateRecipe = async (req, res) => {
  try {
    const updatedRecipe = await Recipe.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!updatedRecipe) {
      return res.status(404).json({ message: 'Recipe not found' });
    }

    res.status(200).json(updatedRecipe);
  } catch (error) {
    res.status(400).json({
      message: 'Error updating recipe',
      error: error.message
    });
  }
};

/**
 * @desc    Delete recipe
 * @route   DELETE /recipes/:id
 */
exports.deleteRecipe = async (req, res) => {
  try {
    const deletedRecipe = await Recipe.findByIdAndDelete(req.params.id);

    if (!deletedRecipe) {
      return res.status(404).json({ message: 'Recipe not found' });
    }

    res.status(200).json({ message: 'Recipe deleted successfully' });
  } catch (error) {
    res.status(400).json({
      message: 'Error deleting recipe',
      error: error.message
    });
  }
};
