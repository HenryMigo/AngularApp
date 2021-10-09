/* tslint:disable:no-unused-variable */
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { TestBed, inject, waitForAsync } from '@angular/core/testing';
import { TodoService } from './todo.service';

describe('Service: Todo', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TodoService],
      imports: [ HttpClientTestingModule ]
    });
  });

  it('should ...', inject([TodoService], (service: TodoService) => {
    expect(service).toBeTruthy();
  }));
});
