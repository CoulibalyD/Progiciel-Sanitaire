import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnswerRdvComponent } from './answer-rdv.component';

describe('AnswerRdvComponent', () => {
  let component: AnswerRdvComponent;
  let fixture: ComponentFixture<AnswerRdvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnswerRdvComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnswerRdvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
