import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FutureDashboardComponent } from './future-dashboard.component';

describe('FutureDashboardComponent', () => {
  let component: FutureDashboardComponent;
  let fixture: ComponentFixture<FutureDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FutureDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FutureDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
