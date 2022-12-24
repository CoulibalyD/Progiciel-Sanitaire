import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultationOphtalmologueComponent } from './consultation-ophtalmologue.component';

describe('ConsultationOphtalmologueComponent', () => {
  let component: ConsultationOphtalmologueComponent;
  let fixture: ComponentFixture<ConsultationOphtalmologueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultationOphtalmologueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultationOphtalmologueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
