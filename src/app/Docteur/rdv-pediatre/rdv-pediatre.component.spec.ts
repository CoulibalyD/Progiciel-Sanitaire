import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdvPediatreComponent } from './rdv-pediatre.component';

describe('RdvPediatreComponent', () => {
  let component: RdvPediatreComponent;
  let fixture: ComponentFixture<RdvPediatreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdvPediatreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RdvPediatreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
