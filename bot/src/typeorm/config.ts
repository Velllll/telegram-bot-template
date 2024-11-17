import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import entities from './entities';

const configService: TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: true,
  entities: entities,
};

export { configService };
