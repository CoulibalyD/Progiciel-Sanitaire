import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdvCardiologueComponent } from './rdv-cardiologue.component';

describe('RdvCardiologueComponent', () => {
  let component: RdvCardiologueComponent;
  let fixture: ComponentFixture<RdvCardiologueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdvCardiologueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RdvCardiologueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
