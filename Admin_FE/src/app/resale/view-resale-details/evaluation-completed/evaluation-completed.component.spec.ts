import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluationCompletedComponent } from './evaluation-completed.component';

describe('EvaluationCompletedComponent', () => {
  let component: EvaluationCompletedComponent;
  let fixture: ComponentFixture<EvaluationCompletedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EvaluationCompletedComponent]
    });
    fixture = TestBed.createComponent(EvaluationCompletedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
