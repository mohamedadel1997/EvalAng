import { Component, OnInit } from '@angular/core';
import { EvaluationModel } from '../../ViewModel/Evaluation.model';
import { EvalService } from '../eval.service';
import { HttpClient } from '@angular/common/http';
import { QuestionForEvaluationModel } from 'src/app/ViewModel/QuestionsForEvaluation.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-evaluation-list',
  templateUrl: './evaluation-list.component.html',
  styleUrls: ['./evaluation-list.component.css']
})
export class EvaluationListComponent implements OnInit {

  evaluationList: EvaluationModel[] = [];

  constructor(private evalService: EvalService, private router: Router) { }

  ngOnInit(): void {
    this.evalService.onGetAll().subscribe(
      result => {
        this.evaluationList = result;
        this.changeDepartmentName();
      }
    )
  }

  changeDepartmentName() {
    for (let i = 0; i < this.evaluationList.length; i++) {
      switch (this.evaluationList[i].departmentId) {
        case 1:
          this.evaluationList[i].departmentName = "IT";
          break;
        case 2:
          this.evaluationList[i].departmentName = "HR";
          break;
        case 3:
          this.evaluationList[i].departmentName = "Finance";
          break

      }
    }
  }

  quesArrStr: QuestionForEvaluationModel[] = [];
  getQuestionDetails(id: number) {
    console.log(id);
    this.evalService.onGetAllQuestionForEvaluation(id).subscribe(
      result => {
        console.log(result);
        this.quesArrStr = result;
      }
    )
  }

  addQuestion(Id: number) {
    this.router.navigate(['/addQuesToEval', Id]);
  }
}
