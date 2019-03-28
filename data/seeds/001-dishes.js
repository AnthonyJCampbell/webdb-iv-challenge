
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('dishes').del()
    .then(function () {
      // Inserts seed entries
      return knex('dishes').insert([
        {name: 'pizza'},
        {name: 'pasta'},
        {name: 'sandwich'},
        {name: 'ribs'},
        {name: 'steak'},
        {name: 'salad'}
      ]);
    });
};
