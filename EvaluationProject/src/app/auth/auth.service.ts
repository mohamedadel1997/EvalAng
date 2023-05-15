import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { EmployeeModel } from '../ViewModel/Employee.model';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  //emoloyee !: EmployeeModel;
  constructor(private http: HttpClient) { }

  onCreatePost(emoloyee: EmployeeModel) {
    let data = this.http
    .post<any>(
      'https://localhost:7199/api/UsersAuthority/SignUp',
      emoloyee
    );
    return data;
  }

  onCreateGet(emoloyee: EmployeeModel){
    let queryParams = new HttpParams();
    queryParams = queryParams.append("email",emoloyee.employeeEmail);
    queryParams = queryParams.append("password",emoloyee.password);

    let data = this.http
    .get<any>(
      'https://localhost:7199/api/UsersAuthority/Login?',
      {
        params: queryParams
      }
    );
    return data;

  }
}
