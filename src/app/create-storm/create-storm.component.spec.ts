import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateStormComponent } from './create-storm.component';

describe('CreateStormComponent', () => {
  let component: CreateStormComponent;
  let fixture: ComponentFixture<CreateStormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateStormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateStormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
