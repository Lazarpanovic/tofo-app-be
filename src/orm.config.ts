import { TypeOrmModuleOptions } from '@nestjs/typeorm'

export const config: TypeOrmModuleOptions = {
  type: 'postgres',
  username: 'fwfygwqx',
  password: 'O5MJSE49KzWWWj8YlvEY1fCeMA2H7ZHM',
  port: 5432,
  host: 'dumbo.db.elephantsql.com',
  database: 'fwfygwqx',
  synchronize: true,
  entities: ['dist/**/*.entity{.ts,.js}*'],
};