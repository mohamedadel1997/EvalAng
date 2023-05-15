import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeServiceService } from '../employee-service.service';
import { EmployeeEvaluations } from 'src/app/ViewModel/EmployeeEvaluation';

@Component({
  selector: 'app-employee-evaluations',
  templateUrl: './employee-evaluations.component.html',
  styleUrls: ['./employee-evaluations.component.css']
})
export class EmployeeEvaluationsComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private empService: EmployeeServiceService) {

  }

  id: number = this.route.snapshot.params['id'];
  employeeId: number = this.route.snapshot.params['idE'];
  employeeEvaluationArray: EmployeeEvaluations = new EmployeeEvaluations;



  ngOnInit(): void {
    this.empService.getAllEvaluationForEmployee(this.employeeId)
      .subscribe({
        next: (result) => {
          this.employeeEvaluationArray = result;
          console.log(this.employeeEvaluationArray.employeeEmail);
        }
        // ,
        // error: error => {
        //   console.log(error.error);

        // },

      })
  }
}
