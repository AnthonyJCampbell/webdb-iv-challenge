const db = require('./../dbConfig');

module.exports = {
  getRecipes,
  addRecipe,
  getRecipe,
  deleteRecipe
}

function getRecipes() {
  return db('recipes');
}

function addRecipe(dish) {
  return db('recipes').insert(dish)
}

function getRecipe(id){
  return db('recipes').where({id})
}

function deleteRecipe(id) {
  return db('recipes').where({id}).del()
}
