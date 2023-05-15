import { EvaluationModel } from "./Evaluation.model";

export class EmployeeEvaluations {
  public employeeId!: number;
  public employeeName!: string;
  public employeeRole !: string;
  public employeeEmail!: string;
  public evaluationModels!: EvaluationModel[];


  constructor() {

  }
}
