import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm/dist';
import { config } from './orm.config';
import { TasksModule } from './task/tasks.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(config),
    TasksModule,
  ],
  controllers: [],
})
export class AppModule {}
