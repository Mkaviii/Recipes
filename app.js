const express = require('express');
const recipeRoutes = require('./routes/recipeRoutes');

const app = express();

app.use(express.json());

// Health check
app.get('/', (req, res) => {
  res.send('Recipes API is running ');
});

app.use('/recipes', recipeRoutes);

// 404 handler
app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

module.exports = app;
