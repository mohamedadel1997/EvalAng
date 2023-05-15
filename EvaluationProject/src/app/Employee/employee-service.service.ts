import { Injectable } from '@angular/core';
import { EmployeeModel } from '../ViewModel/Employee.model';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  constructor(private http: HttpClient) { }



  getAllEvaluationForEmployee(emoloyeeId: number) {

    let queryParams = new HttpParams();
    queryParams = queryParams.append("id", emoloyeeId);

    let data = this.http
      .get<any>(
        'https://localhost:7199/api/Employee/GetAllEvaluationForEmployee',
        {
          params: queryParams
        }
      );
    return data;

  }
}
