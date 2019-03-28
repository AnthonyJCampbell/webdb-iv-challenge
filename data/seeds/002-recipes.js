
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {name: 'Mama', dish_id: 1},
        {name: 'Papa', dish_id: 1},
        {name: 'Daddy', dish_id: 1},
        {name: 'Namer', dish_id: 2},
        {name: 'Other', dish_id: 2},
        {name: 'Sideways', dish_id: 2},
        {name: 'Upsidedown', dish_id: 3},
        {name: 'Neo-polotionina', dish_id: 3},
        {name: 'Dumbledore', dish_id: 3},
        {name: 'nightmare', dish_id: 4},
        {name: 'racket', dish_id: 4},
        {name: 'dirty dozen', dish_id: 4},
        {name: 'greased', dish_id: 5},
        {name: 'partial', dish_id: 5},
        {name: 'extinguished', dish_id: 5},
        {name: 'exsanguiniated', dish_id: 6},
        {name: 'space marine', dish_id: 6},
        {name: 'tough guy', dish_id: 6},
      ]);
    });
};
