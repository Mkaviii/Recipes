const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      
    },
    ingredients: {
      type: [String],
      
    },
    instructions: {
      type: String,
     
    },
    recipeType: {
      type: String,
      enum: ['Veg', 'Non-Veg'],
      
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Recipe', recipeSchema);
