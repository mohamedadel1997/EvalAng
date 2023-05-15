import { Component } from '@angular/core';
import { EvaluationModel } from 'src/app/ViewModel/Evaluation.model';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { EvalService } from '../eval.service';
import { DatePipe, getLocaleDateTimeFormat } from '@angular/common';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-evaluation',
  templateUrl: './evaluation.component.html',
  styleUrls: ['./evaluation.component.css']
})
export class EvaluationComponent {
  evaluation = new EvaluationModel();

  evaluationForm = new FormGroup({
    evalName: new FormControl( null, [Validators.required]),
    evalStartDate: new FormControl( null, [Validators.required]),
    evalEndDate: new FormControl( null, [Validators.required]),
    evalDepId: new FormControl( null, [Validators.required]),
  });


  DepartmentArray: string []= [
    "IT",
    "HR",
    "Finance"
  ];

  constructor(private evalService: EvalService){
  }

  onSubmit(form: FormGroup) {
    this.evaluation.evaluationName = form.value.evalName;

    let newStartDate: NgbDateStruct = form.value.evalStartDate;
    let tmpDate = new Date(newStartDate.year, newStartDate.month-1, newStartDate.day+1);
    console.log(tmpDate);
    this.evaluation.evaluationStartDate = tmpDate;
    let newEndtDate: NgbDateStruct = form.value.evalEndDate;
    tmpDate = new Date(newEndtDate.year, newEndtDate.month-1, newEndtDate.day+1);
    this.evaluation.evaluationEndTime = tmpDate;
    console.log(tmpDate);
    this.evaluation.departmentId = form.value.evalDepId;
    this.evaluation.evaluationStatus = '';
    this.evalService.onCreatePost(this.evaluation);
    form.reset();
  }
}
