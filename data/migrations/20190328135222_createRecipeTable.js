
exports.up = function(knex, Promise) {
  return knex.schema.createTable('recipes', table => {
    table.increments();

    // name
    table.string('name', 128).notNullable()

    // dish_id
    table.integer('dish_id').notNullable().references('id').inTable('recipes').onDelete("CASCADE");
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('recipes')
};

