import { getRepository } from "typeorm";

import Employee from "../entities/Employee";

export async function postEmployee (employeeInfos: Employee) {
  const employee = await getRepository(Employee).insert(employeeInfos)
  
  return employee;
}

export async function getEmployees () {
  const employees = await getRepository(Employee).find();
  
  return employees;
}

export async function putEmployees (employeeInfos: Employee, id: number) {
  const employees = await getRepository(Employee)
    .createQueryBuilder()
    .update(Employee)
    .set({ 
      name: employeeInfos.name, 
      email: employeeInfos.email,
      gender: employeeInfos.gender,
      cpf: employeeInfos.cpf,
      birthdate: employeeInfos.birthdate,
      startdate: employeeInfos.startdate,
      team: employeeInfos.team
    })
    .where("id = :id", { id: id })
    .execute();

  return employees;
}

export async function deleteEmployees (id: number) {
  const users = await getRepository(Employee).delete({id: id});
  
  return users;
}