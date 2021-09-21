import {MigrationInterface, QueryRunner} from "typeorm";

export class employee1632188228924 implements MigrationInterface {
    name = 'employee1632188228924'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "employee" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "email" character varying NOT NULL, "gender" character varying NOT NULL, "cpf" character varying NOT NULL, "birthdate" character varying NOT NULL, "startdate" character varying NOT NULL, "team" character varying NOT NULL, CONSTRAINT "PK_3c2bc72f03fd5abbbc5ac169498" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "employee"`);
    }

}
