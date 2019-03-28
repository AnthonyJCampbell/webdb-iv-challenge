const express = require('express');
const server = express();
// Import Routes
const dishesRoutes = require('./dishes/dishesRoutes');
const recipesRoutes = require('./recipes/recipesRoutes');


server.use(express.json());
server.use('/api/dishes', dishesRoutes)
server.use('/api/recipes', recipesRoutes)

module.exports = server;