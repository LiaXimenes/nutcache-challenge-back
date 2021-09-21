import { getRepository } from "typeorm";

import Employee from "../entities/Employee";

export async function postEmployee () {
  const users = await getRepository(Employee).create;
  
  return users;
}

export async function getEmployees () {
  const users = await getRepository(Employee).find();
  
  return users;
}

export async function getEmployeeById () {
  const user = await getRepository(Employee).find({select: ["id"]});
  
  return user;
}


export async function deleteEmployees () {
  const users = await getRepository(Employee).find({select: ["id"]});
  
  return users;
}