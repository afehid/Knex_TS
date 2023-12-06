import { Model } from 'objection';
import { Channel } from './channel';

export class User extends Model {
  static get tableName() {
    return 'user';
  }
  static get relationMappings() {
    return {
      channel: {
        relation: Model.HasOneRelation,
        modelClass: Channel,
        join: {
          from: 'user.channelId',
          to: 'channel.id',
        },
      },
    };
  }
}
