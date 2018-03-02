import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
// Controller
import { BooksController } from './books.controller';
// Service
import { BooksService } from './books.service';
// Entity
import { Books } from './entity/books.entity';

@Module({
  imports: [ TypeOrmModule.forFeature([Books]) ],
  controllers: [ BooksController ],
  components: [ BooksService ],
  exports: [ BooksService ]
})
export class BooksModule {}
