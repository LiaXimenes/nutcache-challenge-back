import { getRepository } from "typeorm";

import Employee from "../../src/entities/Employee";

export async function clearDatabase () {
  await getRepository(Employee).delete({});
}
