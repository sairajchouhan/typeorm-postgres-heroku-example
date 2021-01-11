import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

import { Todo } from './entity/Todo';

const prodConnection: PostgresConnectionOptions = {
  type: 'postgres',
  url: process.env.DATABASE_URL,
  synchronize: false,
  logging: false,
  extra: {
    ssl: true,
  },
  entities: [Todo],
};

export { prodConnection };
