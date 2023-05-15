import { Component, OnInit } from '@angular/core';
import { EvalService } from '../eval.service';
import { ActivatedRoute } from '@angular/router';
import { QuestionForEvaluationModel } from 'src/app/ViewModel/QuestionsForEvaluation.model';
import { QuestionModel } from 'src/app/ViewModel/Question.model';
import { QuestionService } from 'src/app/Questions/question.service';

@Component({
  selector: 'app-add-questions-to-evaluation',
  templateUrl: './add-questions-to-evaluation.component.html',
  styleUrls: ['./add-questions-to-evaluation.component.css']
})
export class AddQuestionsToEvaluationComponent implements OnInit {

  evaluationId: number = 0;
  message: string = '';
  AllQuestionsForEvaluationArr: QuestionForEvaluationModel[] = [];
  NewallQuestionsForEvaluationArr: QuestionForEvaluationModel[] = [];
  DeleteQuestionsForEvaluationArr: QuestionForEvaluationModel[] = [];

  AllQuestionArr: QuestionModel[] = [];


  constructor(private route: ActivatedRoute,
    private evalService: EvalService,
    private quesService: QuestionService) { }

  ngOnInit(): void {

    this.evaluationId = this.route.snapshot.params['id'];
    this.evalService.onGetAllQuestionForEvaluation(this.evaluationId).subscribe(
      result => {
        this.AllQuestionsForEvaluationArr = result;
      }
    )

    this.quesService.onGetAll().subscribe({
      next: (result) => {
        this.AllQuestionArr = result;
      },
      error: error => {
        console.log(error.error);

      },
      complete: () => {
        this.removeDublicate();
      }
    }
    )
  }

  addQuestionToEval(ques: QuestionModel) {

    let newQues = new QuestionForEvaluationModel();
    newQues.evaluationId = this.evaluationId;
    newQues.questionId = ques.id;
    newQues.question = ques.question;
    if (this.AllQuestionsForEvaluationArr === null) {
      this.AllQuestionsForEvaluationArr = []
    }
    if (this.NewallQuestionsForEvaluationArr === null) {
      this.NewallQuestionsForEvaluationArr = []

    }
    this.AllQuestionsForEvaluationArr.push(newQues);
    this.NewallQuestionsForEvaluationArr.push(newQues);

    const index = this.AllQuestionArr.findIndex((object) => {
      return object.id === ques.id;
    });

    if (index > -1) {
      this.AllQuestionArr.splice(index, 1);


      console.log("All Quest Array");
      console.log(this.AllQuestionArr);
      console.log("All Quest For eval Array");
      console.log(this.AllQuestionsForEvaluationArr);
      console.log("New Array");
      console.log(this.NewallQuestionsForEvaluationArr);

    }

  }


  RemoveQues(ques: QuestionForEvaluationModel) {

    //this.evalService.DeleteQuestionsFormEvaluation(ques);
    const index = this.AllQuestionsForEvaluationArr.findIndex((object) => {
      return object.id === ques.id;
    });

    if (index > -1) {
      this.AllQuestionsForEvaluationArr.splice(index, 1);
    }

    const NewIndex = this.NewallQuestionsForEvaluationArr.findIndex((object) => {
      return object.id === ques.id;
    });

    if (NewIndex > -1) {
      this.NewallQuestionsForEvaluationArr.splice(NewIndex, 1);
    }

    if (ques.id != undefined){
      this.DeleteQuestionsForEvaluationArr.push(ques);
    }
    this.AllQuestionArr.push(ques);

    console.log("All Quest Array");
    console.log(this.AllQuestionArr);
    console.log("All Quest For eval Array");
    console.log(this.AllQuestionsForEvaluationArr);
    console.log("Delete Array");
    console.log(this.DeleteQuestionsForEvaluationArr);
  }

  saveQuestionForEvaluation() {
    if (this.NewallQuestionsForEvaluationArr != null) {
      this.evalService.AddQuestionToEvaluationPost(this.NewallQuestionsForEvaluationArr)
    }
    if (this.DeleteQuestionsForEvaluationArr != null) {
      this.DeleteQuestionsForEvaluationArr.forEach(element => {
        this.evalService.DeleteQuestionsFormEvaluation(element.id);
      });
    }
    this.message = "action saved Successfully";
  }

  removeDublicate() {

    if (this.AllQuestionsForEvaluationArr.length != 0) {
      this.AllQuestionsForEvaluationArr.forEach(element => {

        const index = this.AllQuestionArr.findIndex((object) => {
          return object.id === element.questionId;
        });

        if (index > -1) {
          this.AllQuestionArr.splice(index, 1);
        }
      });
    }
  }

}
