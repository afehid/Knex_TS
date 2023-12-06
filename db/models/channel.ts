import { Model } from 'objection';

export class Channel extends Model {
  static get tableName() {
    return 'channel';
  }
}
