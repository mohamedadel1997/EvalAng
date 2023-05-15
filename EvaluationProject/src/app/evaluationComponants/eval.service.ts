import { HttpClient, HttpParams } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { EvaluationModel } from 'src/app/ViewModel/Evaluation.model';
import { QuestionForEvaluationModel } from '../ViewModel/QuestionsForEvaluation.model';

@Injectable({
  providedIn: 'root'
})
export class EvalService {

  constructor(private http: HttpClient) { }

  evaluationArray: any;

  onCreatePost(evaluation: EvaluationModel) {
    this.http
    .post(
      'https://localhost:7199/api/Evaluation/CreateEvaluation',
      evaluation
    )
    .subscribe({
      next: (data) => {
          console.log(data);
      },
      error: error => {
        console.log(error.error);

      }});
    }

  onGetAll() {
    let arr = this.http.get<any>('https://localhost:7199/api/Evaluation/GetAllEvaluation');
    return arr;
  }

  onGetAllQuestionForEvaluation(id: number) {

    let queryParams = new HttpParams();
    queryParams = queryParams.append('id', id);
    let evaluationQuestionArray = this.http.get<any>('https://localhost:7199/api/Evaluation/GetAllQuestionForEvaluation',
    {
        params: queryParams
    }
    );
    return evaluationQuestionArray;
  }


  AddQuestionToEvaluationPost(evaluation: QuestionForEvaluationModel[]) {
    this.http
    .post(
      'https://localhost:7199/api/Evaluation/AddQuestionToEvaluation',
      evaluation
    )
    .subscribe({
      next: (data) => {
          console.log(data);
      },
      error: error => {
        console.log(error.error);

      }});
    }

    DeleteQuestionsFormEvaluation(id: number) {
      let queryParams = new HttpParams();
        queryParams = queryParams.append('id',id);


      this.http
      .delete(
        'https://localhost:7199/api/Evaluation/DeleteQuestionFormEvaluation',
        {
          params: queryParams
        }
      )
      .subscribe({
        next: (data) => {
            console.log(data);
        },
        error: error => {
          console.log(error.error);

        }});
    }
}
