import { Request, Response } from "express";

import * as employeeService from "../services/employeeService";

export async function postEmployee (req: Request, res: Response) {
  try {
    const employeeInfos = req.body;

    const employee = await employeeService.postEmployee(employeeInfos);
    
    res.send(employee);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
}

export async function getEmployees (req: Request, res: Response) {
  try {
    const employees = await employeeService.getEmployees();
    res.send(employees);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
}

export async function putEmployees (req: Request, res: Response) {
  try {
    const employeeInfos = req.body;
    const id = Number(req.params.id)

    const employee = await employeeService.putEmployees(employeeInfos, id);
    
    res.send(employee);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
}

export async function deleteEmployees (req: Request, res: Response) {
  try {
    const id = Number(req.params.id)
    
    const Employees = await employeeService.deleteEmployees(id);
    res.send(Employees);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
}
