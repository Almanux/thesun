import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SateliteDetailComponent } from './satelite-detail.component';

describe('SateliteDetailComponent', () => {
  let component: SateliteDetailComponent;
  let fixture: ComponentFixture<SateliteDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SateliteDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SateliteDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
