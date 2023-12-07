import { Model } from 'objection';

export class Video extends Model {
  static get tableName() {
    return 'video';
  }
}
//