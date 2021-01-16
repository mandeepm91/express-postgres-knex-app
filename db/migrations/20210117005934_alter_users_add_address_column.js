exports.up = function (knex) {
  return knex.schema.alterTable('users', function (table) {
    table.string('email');
    table.unique('email');
  });
};

exports.down = function (knex) {
  return knex.schema.alterTable('users', function (table) {
    table.dropColumn('email');
  });
};
