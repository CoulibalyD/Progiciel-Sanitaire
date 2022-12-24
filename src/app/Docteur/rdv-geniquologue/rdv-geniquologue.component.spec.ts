import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdvGeniquologueComponent } from './rdv-geniquologue.component';

describe('RdvGeniquologueComponent', () => {
  let component: RdvGeniquologueComponent;
  let fixture: ComponentFixture<RdvGeniquologueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdvGeniquologueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RdvGeniquologueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
