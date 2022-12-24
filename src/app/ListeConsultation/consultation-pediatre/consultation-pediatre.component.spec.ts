import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultationPediatreComponent } from './consultation-pediatre.component';

describe('ConsultationPediatreComponent', () => {
  let component: ConsultationPediatreComponent;
  let fixture: ComponentFixture<ConsultationPediatreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultationPediatreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultationPediatreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
