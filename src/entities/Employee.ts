import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("employee")
export default class Employee {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  gender: string;

  @Column()
  cpf: string;

  @Column()
  birthdate: string;

  @Column()
  startdate: string;

  @Column()
  team: string;
}
