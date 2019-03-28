// Update with your config settings.

module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/recipe_book.sqlite3'
    },
    useNullAsDefault: true,
  },
};
