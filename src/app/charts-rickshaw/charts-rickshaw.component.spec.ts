import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartsRickshawComponent } from './charts-rickshaw.component';

describe('ChartsRickshawComponent', () => {
  let component: ChartsRickshawComponent;
  let fixture: ComponentFixture<ChartsRickshawComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartsRickshawComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartsRickshawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
