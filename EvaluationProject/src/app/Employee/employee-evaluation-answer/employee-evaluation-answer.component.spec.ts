import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeEvaluationAnswerComponent } from './employee-evaluation-answer.component';

describe('EmployeeEvaluationAnswerComponent', () => {
  let component: EmployeeEvaluationAnswerComponent;
  let fixture: ComponentFixture<EmployeeEvaluationAnswerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeEvaluationAnswerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeEvaluationAnswerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
