import { Component } from '@angular/core';
import { EmployeeModel } from 'src/app/ViewModel/Employee.model';
import { AuthService } from '../auth.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

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
    this.successMessage="";
    this.errMessage="";
  }

  emoloyee = new EmployeeModel() ;

  constructor(private authService: AuthService, private http: HttpClient, private router: Router) {
    this.successMessage="";
    this.errMessage="";
    }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }
      this.emoloyee.employeeEmail =  form.value.email
      this.emoloyee.password =  form.value.password;
      this.emoloyee.employeeName = form.value.employeeName;
      this.emoloyee.employeePhone = form.value.employeePhone;
      this.emoloyee.employeeRole = form.value.employeeRole;
      this.emoloyee.departmentId = form.value.DepartmentId;

      this.authService.onCreatePost(this.emoloyee).subscribe({
        next: (data) => {
          this.router.navigate(['Evaluations'])
        },
        error: error => {
            this.errMessage = "user doesn't exist";
        }});
    form.reset();
  }

}
