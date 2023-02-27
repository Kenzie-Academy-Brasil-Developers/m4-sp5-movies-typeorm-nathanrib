import { MigrationInterface, QueryRunner } from "typeorm";

export class alterColums1677427824072 implements MigrationInterface {
    name = 'alterColums1677427824072'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "movies " DROP COLUMN "description"`);
        await queryRunner.query(`ALTER TABLE "movies " ADD "description" text`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "movies " DROP COLUMN "description"`);
        await queryRunner.query(`ALTER TABLE "movies " ADD "description" character varying`);
    }

}
