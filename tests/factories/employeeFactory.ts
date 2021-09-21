import { getRepository } from "typeorm";

import Employee from "../../src/entities/Employee";

export async function createEmployee () {
  const user = await getRepository(Employee).create({});

  await getRepository(Employee).save(user);

  return user;
}
