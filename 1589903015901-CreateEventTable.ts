import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateEventTable1589903015901 implements MigrationInterface {
    name = 'CreateEventTable1589903015901'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "event" ("id" SERIAL NOT NULL, 
                                "name" character varying NOT NULL,
                                "preparation" character varying NOT NULL, 
                                "isActive" boolean NOT NULL, 
                                CONSTRAINT "PK_30c2f3bbaf6d34a55f8ae6e4614" PRIMARY KEY ("id"))`, 
                                undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "event"`, undefined);
    }

}
