export class EmployeeModel{
  public employeeEmail: string;
  public password: string;
  public employeeName: string;
  public employeePhone: string;
  public employeeRole: string ;
  public departmentId:number;

  constructor(){
    this.employeeName = "";
    this.employeeEmail = "";
    this.password = "";
    this.employeePhone = "";
    this.employeeRole = "";
    this.departmentId = 0;
  }
}
