import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultationGynecologueComponent } from './consultation-gynecologue.component';

describe('ConsultationGynecologueComponent', () => {
  let component: ConsultationGynecologueComponent;
  let fixture: ComponentFixture<ConsultationGynecologueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultationGynecologueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultationGynecologueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
