//if this migration runs in prod there is no way back (for prod)
exports.up = function(knex) {
  return knex.schema .createTable('fruits', tbl => {
      tbl.increments() //if blank creates auto increments integers on id
      tbl.text('fruit_name', 256).unique().notNullable() // required and unique 256 char limit
      tbl.float('avg_weight' ).notNullable() // required
      tbl.boolean('is_delicious').notNullable().default(true) // if not provided by client, defaults to true
    });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('fruits');
};
