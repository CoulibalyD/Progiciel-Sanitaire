import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultationDentisteComponent } from './consultation-dentiste.component';

describe('ConsultationDentisteComponent', () => {
  let component: ConsultationDentisteComponent;
  let fixture: ComponentFixture<ConsultationDentisteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultationDentisteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultationDentisteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
