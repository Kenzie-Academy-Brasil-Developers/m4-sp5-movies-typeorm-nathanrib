import { MigrationInterface, QueryRunner } from "typeorm";

export class alterTableName1677439848422 implements MigrationInterface {
    name = 'alterTableName1677439848422'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE SEQUENCE IF NOT EXISTS "movies_id_seq" OWNED BY "movies"."id"`);
        await queryRunner.query(`ALTER TABLE "movies" ALTER COLUMN "id" SET DEFAULT nextval('"movies_id_seq"')`);
        await queryRunner.query(`ALTER TABLE "movies" ALTER COLUMN "id" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "movies" DROP COLUMN "description"`);
        await queryRunner.query(`ALTER TABLE "movies" ADD "description" text`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "movies" DROP COLUMN "description"`);
        await queryRunner.query(`ALTER TABLE "movies" ADD "description" character varying`);
        await queryRunner.query(`ALTER TABLE "movies" ALTER COLUMN "id" SET DEFAULT nextval('"movies _id_seq"')`);
        await queryRunner.query(`ALTER TABLE "movies" ALTER COLUMN "id" DROP DEFAULT`);
        await queryRunner.query(`DROP SEQUENCE "movies_id_seq"`);
    }

}
