import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluationScheduledComponent } from './evaluation-scheduled.component';

describe('EvaluationScheduledComponent', () => {
  let component: EvaluationScheduledComponent;
  let fixture: ComponentFixture<EvaluationScheduledComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EvaluationScheduledComponent]
    });
    fixture = TestBed.createComponent(EvaluationScheduledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
