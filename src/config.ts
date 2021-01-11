import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

import { Todo } from './entity/Todo';

const prodConnection: PostgresConnectionOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'aunzbedi',
  database: 'sm1',
  synchronize: true,
  logging: false,
  extra: {
    ssl: true,
  },
  entities: [Todo],
};

export { prodConnection };
