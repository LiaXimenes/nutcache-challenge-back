import { getRepository } from "typeorm";

import Employee from "../../src/entities/Employee";
import EmployeeData from "../../src/interfaces/employee";

export async function createEmployee () {
  const employeeBody: EmployeeData = {
    name: "test",
    email: "test@test.com",
    gender: "none",
    cpf: "12345678910",
    birthdate: "01/01/1990",
    startdate: "10/2020",
    team: "front-end"
  }

  const employee = (await getRepository(Employee).insert(employeeBody)).generatedMaps[0].id;

  return employee;
}
