import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { BooksModule } from './modules/books/books.module';
// Environment
import { ENV as env } from './env/env';

@Module({
  imports: [
    TypeOrmModule.forRoot(env.database),
    BooksModule
  ],
  controllers: [AppController],
  components: [],
})
export class ApplicationModule { }
