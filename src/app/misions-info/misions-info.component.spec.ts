import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MisionsInfoComponent } from './misions-info.component';

describe('MisionsInfoComponent', () => {
  let component: MisionsInfoComponent;
  let fixture: ComponentFixture<MisionsInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MisionsInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MisionsInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
