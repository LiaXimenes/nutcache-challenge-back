import { Request, Response } from "express";

import * as employeeService from "../services/employeeService";

export async function postEmployee (req: Request, res: Response) {
  try {
    const Employees = await employeeService.postEmployee();
    res.send(Employees);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
}

export async function getEmployees (req: Request, res: Response) {
  try {
    const Employees = await employeeService.getEmployees();
    res.send(Employees);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
}
export async function getEmployeeById (req: Request, res: Response) {
  try {
    const Employees = await employeeService.getEmployeeById();
    res.send(Employees);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
}

export async function deleteEmployees (req: Request, res: Response) {
  try {
    const Employees = await employeeService.deleteEmployees();
    res.send(Employees);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
}