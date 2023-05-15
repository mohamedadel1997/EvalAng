import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { EvaluationListComponent } from './evaluationComponants/evaluation-list/evaluation-list.component';
import { QuestionListComponent } from './Questions/question-list/question-list.component';
import { NewQuestionComponent } from './Questions/new-question/new-question.component';
import { SignupComponent } from './auth/signup/signup.component';
import { EvaluationComponent } from './evaluationComponants/evaluation/evaluation.component';
import { AddQuestionsToEvaluationComponent } from './evaluationComponants/add-questions-to-evaluation/add-questions-to-evaluation.component';
import { EmployeeEvaluationsComponent } from './Employee/employee-evaluations/employee-evaluations.component';

const routes: Routes = [
  {path: "login",component:AuthComponent},
  {path: "addEmp",component:SignupComponent},
  {path: "Evaluations",component:EvaluationListComponent},
  {path: "Evaluation",component:EvaluationComponent},
  {path: "all-ques",component:QuestionListComponent},
  {path: "ques",component:NewQuestionComponent},
  {path: "addQuesToEval/:id", component: AddQuestionsToEvaluationComponent},
  {path: "empEval/:idE/:id", component: EmployeeEvaluationsComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
