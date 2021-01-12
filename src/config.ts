import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';
import { Todo } from './entity/Todo';

const postgresUrl =
  'postgres://irrtlvpmjgohnn:658398fda89913575179b4d124d21c72b25acf54158c1c1f852aaaf70a689a96@ec2-54-144-45-5.compute-1.amazonaws.com:5432/d591ssbu6sg100';

const prodConnection: PostgresConnectionOptions = {
  type: 'postgres',
  url: process.env.DATABASE_URL || `${postgresUrl}`,
  synchronize: false,
  logging: false,
  ssl: true,
  extra: {
    ssl: {
      rejectUnauthorized: false,
    },
  },
  entities: [Todo],
};

export { prodConnection };
