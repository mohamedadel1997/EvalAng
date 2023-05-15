import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { QuestionService } from '../question.service';
import { QuestionModel } from 'src/app/ViewModel/Question.model';

@Component({
  selector: 'app-new-question',
  templateUrl: './new-question.component.html',
  styleUrls: ['./new-question.component.css']
})
export class NewQuestionComponent {

  question = new QuestionModel;

  constructor(private quesService: QuestionService ) { }

  questionForm = new FormGroup({
    question: new FormControl( null, [Validators.required])
  });



  onSubmit(form: FormGroup) {

    this.question.question = form.value.question;
    this.quesService.onCreatePost(this.question);
    form.reset();
  }
}
