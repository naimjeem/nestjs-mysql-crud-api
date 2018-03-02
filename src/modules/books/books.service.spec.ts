import { Test } from '@nestjs/testing';
import { TestingModule } from '@nestjs/testing/testing-module';
import { BooksService } from './books.service';
import { expect } from 'chai';

describe('BooksService', () => {
  let module: TestingModule;
  beforeEach(() => {
    return Test.createTestingModule({
      components: [
        BooksService
      ]
    }).compile()
      .then(compiledModule => module = compiledModule);
  });

  let service: BooksService;
  beforeEach(() => {
    service = module.get(BooksService);
  });

  it('should exist', () => {
    expect(service).to.exist;
  });
});
