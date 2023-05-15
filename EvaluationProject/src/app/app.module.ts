import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { EvaluationComponent } from './evaluationComponants/evaluation/evaluation.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NewQuestionComponent } from './Questions/new-question/new-question.component';
import { QuestionListComponent } from './Questions/question-list/question-list.component';
import { SignupComponent } from './auth/signup/signup.component';
import { EvaluationListComponent } from './evaluationComponants/evaluation-list/evaluation-list.component';
import { AddQuestionsToEvaluationComponent } from './evaluationComponants/add-questions-to-evaluation/add-questions-to-evaluation.component';
import { EmployeeEvaluationsComponent } from './Employee/employee-evaluations/employee-evaluations.component';
import { EmployeeEvaluationAnswerComponent } from './Employee/employee-evaluation-answer/employee-evaluation-answer.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    HeaderComponent,
    EvaluationComponent,
    EvaluationListComponent,
    NewQuestionComponent,
    QuestionListComponent,
    SignupComponent,
    AddQuestionsToEvaluationComponent,
    EmployeeEvaluationsComponent,
    EmployeeEvaluationAnswerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
