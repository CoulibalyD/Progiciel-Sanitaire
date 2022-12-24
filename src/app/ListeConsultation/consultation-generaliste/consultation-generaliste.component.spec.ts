import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultationGeneralisteComponent } from './consultation-generaliste.component';

describe('ConsultationGeneralisteComponent', () => {
  let component: ConsultationGeneralisteComponent;
  let fixture: ComponentFixture<ConsultationGeneralisteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultationGeneralisteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultationGeneralisteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
