import { Controller, Body, Param, Get, Post, Put, Delete } from '@nestjs/common';
// Service
import { BooksService } from './books.service';
// DTO
import { BookDto } from './dto/book.dto';
import { BookIdDto } from './dto/book-id.dto';

@Controller('books')
export class BooksController {

  constructor(private readonly booksService: BooksService) {}

  @Get()
  async findAll(): Promise<BookIdDto[]> {
    return await this.booksService.findAll() as BookIdDto[];
  }
  
  @Get(':id') 
  async findOneById(@Param() params): Promise<BookIdDto> {
    return await this.booksService.findById(params.id);
  }

  @Post()
  async create(@Body() book: BookDto): Promise<BookDto> {
    return await this.booksService.insert(book) as BookDto;
  }

  @Put(':id')
  async update(@Body() updatedBook: BookDto, @Param() params): Promise<BookIdDto> {
    const oldBook = await this.booksService.findById(params.id);
    return await this.booksService.update(oldBook, updatedBook);
  }

}
