import supertest from "supertest";
import { getConnection } from "typeorm";

import app, { init } from "../../src/app";
import { createEmployee } from "../factories/employeeFactory";
import { clearDatabase } from "../utils/database";
import EmployeeData from "../../src/interfaces/employee";

beforeAll(async () => {
  await init();
});

beforeEach(async () => {
  await clearDatabase();
});

afterAll(async () => {
  await getConnection().close();
});

describe("POST /", () => {
  it("should answer status 200", async () => {
    const employeeBody: EmployeeData = {
      name: "test",
      email: "test@test.com",
      gender: "none",
      cpf: "12345678910",
      birthdate: "01/01/1990",
      startdate: "10/2020",
      team: "front-end"
    }

    const response = await supertest(app).post("/nutemployee").send(employeeBody);
    expect(response.status).toBe(200);
  });

  it("should answer status 400", async () => {
    const employeeBody: EmployeeData = {
      name: "test",
      email: "000",
      gender: "none",
      cpf: "12345678910",
      birthdate: "01/01/1990",
      startdate: "10/2020",
      team: "front-end"
    }

    const response = await supertest(app).post("/nutemployee").send(employeeBody);
    expect(response.status).toBe(400);
  });

});

describe("GET /", () => {
  it("should answer status 200", async () => {
    const employee = await createEmployee();

    const response = await supertest(app).get("/nutemployee");
    expect(response.status).toBe(200);
  });

  it("should return array", async () => {
    const employee = await createEmployee();
    
    const response = await supertest(app).get("/nutemployee");
    expect(response.body.length).not.toBe(0);
  });

});

describe("PUT /", () => {
  it("should answer status 200", async () => {
    const employee = await createEmployee();

    const employeeBody: EmployeeData = {
      name: "test",
      email: "test@test.com",
      gender: "none",
      cpf: "12345678910",
      birthdate: "01/01/1990",
      startdate: "10/2020",
      team: "back-end"
    }

    const response = await supertest(app).put(`/nutemployee/${employee}`).send(employeeBody);
    expect(response.status).toBe(200);
  });

});

describe("DELETE /", () => {
  it("should answer status 200", async () => {
    const employee = await createEmployee();

    const response = await supertest(app).delete(`/nutemployee/${employee}`);
    expect(response.status).toBe(200);
  });

});

