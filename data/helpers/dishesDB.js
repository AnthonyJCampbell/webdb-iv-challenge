const db = require('./../dbConfig');

module.exports = {
  getDishes,
  addDish,
  getDish,
  deleteDish
}

function getDishes() {
  return db('dishes');
}

function addDish(dish) {
  return db('dishes').insert(dish)
}

function getDish(id){

}

function deleteDish(id) {

}