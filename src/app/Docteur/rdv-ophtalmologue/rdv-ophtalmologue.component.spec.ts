import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdvOphtalmologueComponent } from './rdv-ophtalmologue.component';

describe('RdvOphtalmologueComponent', () => {
  let component: RdvOphtalmologueComponent;
  let fixture: ComponentFixture<RdvOphtalmologueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdvOphtalmologueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RdvOphtalmologueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
