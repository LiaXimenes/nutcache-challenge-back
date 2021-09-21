import "./setup";

import express from "express";
import cors from "cors";
import "reflect-metadata";

import connectDatabase from "./database";

import * as employeeConroller from "./controllers/employeeConroller";

const app = express();
app.use(cors());
app.use(express.json());

app.post("/nutemployee", employeeConroller.getEmployees);
app.get("/nutemployee", employeeConroller.getEmployees);
app.get("/nutemployee/:id", employeeConroller.getEmployees);
app.put("/nutemployee/:id", employeeConroller.getEmployees);
app.delete("/nutemployee/:id", employeeConroller.getEmployees);

export async function init () {
  await connectDatabase();
}

export default app;
