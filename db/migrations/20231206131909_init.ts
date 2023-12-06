import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema
    .createTable('channel', (table) => {
      table.increments();
      table.string('name').notNullable();
      table.timestamps(true, true);
    })
    .createTable('user', (table) => {
      table.increments();
      table.string('name').notNullable();
      table.string('email').notNullable().unique();
      table.integer('channelId').references('id').inTable('channel');
      table.timestamps(true, true);
    })
    .createTable('video', (table) => {
      table.increments();
      table.string('title').notNullable();
      table.timestamps(true, true);
      table
        .integer('channelId')
        .notNullable()
        .references('id')
        .inTable('channel');
    });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema
    .dropTableIfExists('video')
    .dropTableIfExists('user')
    .dropSchemaIfExists('channel');
}
