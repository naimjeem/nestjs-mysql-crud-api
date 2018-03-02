import { Test } from '@nestjs/testing';
import { TestingModule } from '@nestjs/testing/testing-module';
import { BooksController } from './books.controller';
import { expect } from 'chai';

describe('BooksController', () => {
  let module: TestingModule;
  beforeEach(() => {
    return Test.createTestingModule({
      controllers: [
        BooksController
      ]
    }).compile()
      .then(compiledModule => module = compiledModule);
  });

  let controller: BooksController;
  beforeEach(() => {
    controller = module.get(BooksController);
  });

  it('should exist', () => {
    expect(controller).to.exist;
  });
});
