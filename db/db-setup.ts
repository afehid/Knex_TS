import { knex } from 'knex';
import knexFile from './knexfile';
import { Model } from 'objection';

export function setupDB(): void {
  const db = knex(knexFile.development);
  Model.knex(db);
}
