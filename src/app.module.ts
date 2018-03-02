import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
// Environment
import { ENV as env } from './env/env';

@Module({
  imports: [TypeOrmModule.forRoot(env.database)],
  controllers: [AppController],
  components: [],
})
export class ApplicationModule { }
