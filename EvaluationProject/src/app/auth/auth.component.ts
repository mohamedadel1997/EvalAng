import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmployeeModel } from '../ViewModel/Employee.model';
import { AuthService } from './auth.service';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit{

  successMessage: string = "";
  errMessage: string = "";


  employeeRoleArray: string []= [
    "Employee",
    "Manger",
    "Admin"
  ];
  DepartmentArray: string []= [
    "IT",
    "HR",
    "Finance"
  ];

  ngOnInit(): void {
  }

  emoloyee = new EmployeeModel() ;

  constructor(private authService: AuthService, private http: HttpClient, private router: Router) {
    }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }
      this.emoloyee.employeeEmail =  form.value.email
      this.emoloyee.password =  form.value.password;
      this.authService.onCreateGet(this.emoloyee).subscribe({
        next: (data) => {
            this.router.navigate(['empEval', data.id, data.departmentId]);
        },
        error: error => {
            // this.errorMessage = error.message;
            console.log(error.error);
            this.errMessage = error.error;
        }});
    form.reset();
  }
}
