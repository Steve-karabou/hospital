import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayPatientsComponent } from './display-patients.component';

describe('DisplayPatientsComponent', () => {
  let component: DisplayPatientsComponent;
  let fixture: ComponentFixture<DisplayPatientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayPatientsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayPatientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
