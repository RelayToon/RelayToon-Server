import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';
dotenv.config({ path: '.env.dev' });

export const typeORMConfig: TypeOrmModuleOptions = {
  type: process.env.TYPEORM_TYPE as 'postgres',
  host: process.env.TYPEORM_HOST,
  port: +process.env.TYPEORM_PORT,
  username: process.env.TYPEORM_USERNAME,
  password: process.env.TYPEORM_PASSWORD,
  database: process.env.TYPEORM_DATABASE,
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  synchronize: process.env.TYPEORM_SYNCHRONIZE === 'true',
};
