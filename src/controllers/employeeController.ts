import { Request, Response } from "express";
import Joi from 'joi';

import * as employeeService from "../services/employeeService";

const schema = Joi.object({
  name: Joi.string().min(3).required(),
  email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: false}}).required(),
  gender: Joi.string().required(),
  cpf: Joi.string().min(11).required(),
  birthdate: Joi.date().raw().required(),
  startdate: Joi.string().min(6).required(),
  team: Joi.string().required(),
})

export async function postEmployee (req: Request, res: Response) {
  const validation = schema.validate(req.body);

  if(!validation.error){
    try {
      const employeeInfos = req.body;
  
      await employeeService.postEmployee(employeeInfos);
      
      res.sendStatus(200);
    } catch (err) {
      console.error(err);
      res.sendStatus(500);
    }
  } else {
    res.sendStatus(400);
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
  const validation = schema.validate(req.body);

  if(!validation.error){
    try {
      const employeeInfos = req.body;
      const id = Number(req.params.id)
  
      await employeeService.putEmployees(employeeInfos, id);
      
      res.sendStatus(200);
    } catch (err) {
      console.error(err);
      res.sendStatus(500);
    }
  } else {
    res.sendStatus(400);
  }  
}

export async function deleteEmployees (req: Request, res: Response) {
  try {
    const id = Number(req.params.id)
    
    await employeeService.deleteEmployees(id);
    res.sendStatus(200);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
}
