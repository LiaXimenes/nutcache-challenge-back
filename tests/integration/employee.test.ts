import supertest from "supertest";
import { getConnection } from "typeorm";

import app, { init } from "../../src/app";
import { createEmployee } from "../factories/employeeFactory";
import { clearDatabase } from "../utils/database";

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

});
describe("GET /", () => {

});
describe("GET /", () => {

});
describe("PUT /", () => {

});
describe("DELETE /", () => {

});

