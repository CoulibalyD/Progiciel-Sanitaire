import { TestBed } from '@angular/core/testing';

import { AnswerRdvService } from './answer-rdv.service';

describe('AnswerRdvService', () => {
  let service: AnswerRdvService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnswerRdvService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
