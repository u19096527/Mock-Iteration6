import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingBookingsComponent } from './pending-bookings.component';

describe('PendingBookingsComponent', () => {
  let component: PendingBookingsComponent;
  let fixture: ComponentFixture<PendingBookingsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PendingBookingsComponent]
    });
    fixture = TestBed.createComponent(PendingBookingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
