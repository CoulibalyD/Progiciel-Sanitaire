import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdvGeneralisteComponent } from './rdv-generaliste.component';

describe('RdvGeneralisteComponent', () => {
  let component: RdvGeneralisteComponent;
  let fixture: ComponentFixture<RdvGeneralisteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdvGeneralisteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RdvGeneralisteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
