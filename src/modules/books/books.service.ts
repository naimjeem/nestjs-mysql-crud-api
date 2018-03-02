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
    try {
      return await this.bookRepository.find({});
    } catch (err) {
      return err;
    }
  }

  async findById(id: string): Promise<Books> {
    try {
      return await this.bookRepository.findOneById(id);
    } catch (err) {
      return err;
    }
  }

  async insert(book: BookDto): Promise<Books> {
    const newBook = new Books();

    Object.keys(book).forEach((key) => {
      newBook[key] = book[key];
    });

    try {
      return await this.bookRepository.save(newBook);
    } catch (err) {
      return err;
    }
  }

  async update(oldBook: Books, updated_values: BookDto): Promise<Books> {
    const updatedBook = oldBook;

    Object.keys(updated_values).forEach((key) => {
      updatedBook[key] = updated_values[key];
    });

    try {
      return await this.bookRepository.save(updatedBook);
    } catch (err) {
      return err;
    }

  }

  async delete(id: string) {
   try {
      return await this.bookRepository.deleteById(id);
    } catch (err) {
      return err;
    }
  }

}
