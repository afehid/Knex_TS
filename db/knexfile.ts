import type { Knex } from 'knex';

import { snakeCaseMappers as knexSnakeCaseMappers } from 'objection';
import dotenv from 'dotenv';
interface IKnexConfig {
  [key: string]: Knex.Config;
  development: {
    client: string;
    connection: {
      database: string;
      user: string;
      password: string;
    };
    migrations: {
      tableName: string;
    };
    seeds: {
      directory: string;
    };
  };
}

dotenv.config();

const knexFile: IKnexConfig = {
  development: {
    client: 'pg',
    connection: {
      database: 'objection_tutorial',
      user: process.env.DB_USERNAME || 'postgres',
      password: process.env.DB_PASSWORD || 'postgres',
    },

    migrations: {
      tableName: 'knex_migrations',
    },
    seeds: {
      directory: './seeds',
    },
    ...knexSnakeCaseMappers,
  },
};
export default knexFile;

// import { snakeCaseMappers as knexSnakeCaseMappers } from 'objection';
// import dotenv from 'dotenv';

// dotenv.config();

// interface DatabaseConfig {
//   development: {
//     client: string;
//     connection: {
//       host: string;
//       database: string;
//       user: string;
//       password: string;
//     };
//     migrations: {
//       tableName: string;
//       directory: string;
//     };
//     seeds: {
//       directory: string;
//     };
//     // Add other properties or configurations if necessary
//     [key: string]: unknown; // Allows any other property in development object
//   };
// }

// export const knexFile: DatabaseConfig = {
//   development: {
//     client: 'pg',
//     connection: {
//       host: 'localhost',
//       database: 'objection_tutorial',
//       user: process.env.DB_USERNAME || '',
//       password: process.env.DB_PASSWORD || '',
//     },

//     migrations: {
//       tableName: 'knex_migrations',
//       directory: './migrations',
//     },
//     seeds: {
//       directory: './seeds',
//     },
//     ...knexSnakeCaseMappers,
//   },
// };
