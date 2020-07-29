import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateTables1592366211565 implements MigrationInterface {
    name = 'CreateTables1592366211565'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "event" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "preparation" character varying NOT NULL, "isActive" boolean NOT NULL, CONSTRAINT "PK_30c2f3bbaf6d34a55f8ae6e4614" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "diagnose" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "abbreviation" character varying(30) NOT NULL, "name" character varying(30) NOT NULL, "description" character varying(60), "isActive" boolean NOT NULL, CONSTRAINT "PK_18333da5c8a75af7f1609fce544" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "ips" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "address" character varying NOT NULL, "phone" character varying NOT NULL, "isActive" boolean NOT NULL, CONSTRAINT "UQ_62fd613fd2570c12c19f2448893" UNIQUE ("name"), CONSTRAINT "PK_6fad62674f823ba4d934fe5b3f3" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "type_document" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "abbreviation" character varying NOT NULL, "name" character varying NOT NULL, "isActive" boolean NOT NULL, CONSTRAINT "UQ_57279e930fa9bc6fd5564b5a045" UNIQUE ("abbreviation"), CONSTRAINT "UQ_83dcc7d899a6f4d496ac3f3fc52" UNIQUE ("name"), CONSTRAINT "PK_a89fb9f22e15824ce89c11c5a1b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "medical_entity" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "phone" character varying NOT NULL, "numberDocument" character varying NOT NULL, "isActive" boolean NOT NULL, "typeDocumentId" uuid, CONSTRAINT "UQ_333cce2eeeefafa4e186f5ecbbf" UNIQUE ("name"), CONSTRAINT "UQ_c9e98777c8aecc1a3b34f940cc2" UNIQUE ("numberDocument"), CONSTRAINT "REL_75c50e957abcd3659714d8a0cc" UNIQUE ("typeDocumentId"), CONSTRAINT "PK_792226c31250502119a124e0176" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "event" DROP CONSTRAINT "PK_30c2f3bbaf6d34a55f8ae6e4614"`);
        await queryRunner.query(`ALTER TABLE "event" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "event" ADD "id" uuid NOT NULL DEFAULT uuid_generate_v4()`);
        await queryRunner.query(`ALTER TABLE "event" ADD CONSTRAINT "PK_30c2f3bbaf6d34a55f8ae6e4614" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "event" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "event" ADD "name" character varying(30) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "event" DROP COLUMN "preparation"`);
        await queryRunner.query(`ALTER TABLE "event" ADD "preparation" character varying(300)`);
        await queryRunner.query(`ALTER TABLE "medical_entity" ADD CONSTRAINT "FK_75c50e957abcd3659714d8a0cc4" FOREIGN KEY ("typeDocumentId") REFERENCES "type_document"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "medical_entity" DROP CONSTRAINT "FK_75c50e957abcd3659714d8a0cc4"`);
        await queryRunner.query(`ALTER TABLE "event" DROP COLUMN "preparation"`);
        await queryRunner.query(`ALTER TABLE "event" ADD "preparation" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "event" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "event" ADD "name" character varying NOT NULL`);
        await queryRunner.query(`DROP TABLE "medical_entity"`);
        await queryRunner.query(`DROP TABLE "type_document"`);
        await queryRunner.query(`DROP TABLE "ips"`);
        await queryRunner.query(`DROP TABLE "diagnose"`);
        await queryRunner.query(`DROP TABLE "event"`);
    }
}
