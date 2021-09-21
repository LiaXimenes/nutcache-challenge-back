import "./setup";

import express from "express";
import cors from "cors";
import "reflect-metadata";

import connectDatabase from "./database";

import * as employeeController from "./controllers/employeeController";

const app = express();
app.use(cors());
app.use(express.json());

export async function init () {
  await connectDatabase();
}

app.post("/nutemployee", employeeController.postEmployee);

app.get("/nutemployee", employeeController.getEmployees);

app.put("/nutemployee/:id", employeeController.putEmployees);

app.delete("/nutemployee/:id", employeeController.deleteEmployees);


export default app;
