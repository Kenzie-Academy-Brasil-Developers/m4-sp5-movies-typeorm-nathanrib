import { MigrationInterface, QueryRunner } from "typeorm";

export class createMovie1677387605029 implements MigrationInterface {
    name = 'createMovie1677387605029'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "movies " ("id" SERIAL NOT NULL, "name" character varying(50) NOT NULL, "description" character varying, "duration" integer NOT NULL, "price" integer NOT NULL, CONSTRAINT "UQ_83e9f3658fabbb45abec4ab2e0c" UNIQUE ("name"), CONSTRAINT "PK_9eb8f52795560b20b0ee1bd9934" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "movies "`);
    }

}
