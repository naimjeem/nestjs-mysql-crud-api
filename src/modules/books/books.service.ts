import { Component } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
// Entity
import { Books } from './entity/books.entity';
// DTO
import { BookDto } from './dto/book.dto';

@Component()
export class BooksService {

  constructor(
    @InjectRepository(Books)
    private readonly bookRepository: Repository<Books>
  ) {}

  async findAll(): Promise<Books[]> {
    return await this.bookRepository.find({});
  }

  async findById(id: string): Promise<Books> {
    return await this.bookRepository.findOneById(id);
  }

  async insert(book: BookDto): Promise<Books> {
    const newBook = new Books();

    Object.keys(book).forEach((key) => {
      newBook[key] = book[key];
    });

    return await this.bookRepository.save(newBook);
  }

  async update(oldBook: Books, updated_values: BookDto): Promise<Books> {
    const updatedBook = oldBook;

    Object.keys(updated_values).forEach((key) => {
      updatedBook[key] = updated_values[key];
    });

    return await this.bookRepository.save(updatedBook);
  }

}
