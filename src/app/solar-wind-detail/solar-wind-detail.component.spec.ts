import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolarWindDetailComponent } from './solar-wind-detail.component';

describe('SolarWindDetailComponent', () => {
  let component: SolarWindDetailComponent;
  let fixture: ComponentFixture<SolarWindDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolarWindDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolarWindDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
