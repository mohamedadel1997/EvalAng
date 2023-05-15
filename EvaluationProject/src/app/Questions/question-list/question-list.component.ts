import { Component, OnInit } from '@angular/core';
import { QuestionModel } from 'src/app/ViewModel/Question.model';
import { QuestionService } from '../question.service';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent implements OnInit{

  constructor(private quesService: QuestionService) { }
  questionList:QuestionModel[] = [] ;




ngOnInit(): void {
  this.quesService.onGetAll().subscribe( result =>{
    this.questionList = result;
  })
}

}
