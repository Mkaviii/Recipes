const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
    date:{
        type:Date
    },
    recipesType:{
        type:String,
        enum:['Veg','Non-Veg']

    },
    meals:[{
        mealType:{
            type:String,
            enum:['Breakfast','Lunch','Dinner']
        }
    }],
    name:String


},{timestamps:true});

module.exports = mongoose.model('Recipes',recipeSchema,'Recipes')