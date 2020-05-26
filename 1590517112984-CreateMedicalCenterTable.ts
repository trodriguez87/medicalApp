import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateMedicalCenterTable1590517112984 implements MigrationInterface {
    name = 'CreateMedicalCenterTable1590517112984'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "event" DROP CONSTRAINT "PK_30c2f3bbaf6d34a55f8ae6e4614"`, undefined);
        await queryRunner.query(`ALTER TABLE "event" DROP COLUMN "id"`, undefined);
        await queryRunner.query(`ALTER TABLE "event" ADD "id" uuid NOT NULL DEFAULT uuid_generate_v4()`, undefined);
        await queryRunner.query(`ALTER TABLE "event" ADD CONSTRAINT "PK_30c2f3bbaf6d34a55f8ae6e4614" PRIMARY KEY ("id")`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "event" DROP CONSTRAINT "PK_30c2f3bbaf6d34a55f8ae6e4614"`, undefined);
        await queryRunner.query(`ALTER TABLE "event" DROP COLUMN "id"`, undefined);
        await queryRunner.query(`ALTER TABLE "event" ADD "id" SERIAL NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "event" ADD CONSTRAINT "PK_30c2f3bbaf6d34a55f8ae6e4614" PRIMARY KEY ("id")`, undefined);
    }

}
