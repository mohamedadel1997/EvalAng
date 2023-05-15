import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { QuestionModel } from '../ViewModel/Question.model';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private http: HttpClient) { }

  onCreatePost(question: QuestionModel) {
    this.http
    .post(
      'https://localhost:7199/api/Questions/CreateQuestion',
      question
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
    let arr = this.http.get<any>('https://localhost:7199/api/Questions/GetAllQuestion');
    return arr;
  }
}
