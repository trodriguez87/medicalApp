import { Module } from '@nestjs/common';
import { MedicalEntityController } from './medical-entity.controller';
import { MedicalEntityService } from './medical-entity.service';
import { MedicalEntity } from 'src/entities/medicalEntity.entity';
import {TypeOrmModule} from '@nestjs/typeorm';



@Module({
  controllers: [MedicalEntityController],
  providers: [MedicalEntityService],
  imports: [
    TypeOrmModule.forFeature([MedicalEntity])
  ],
  exports: [MedicalEntityService]
})
export class MedicalEntityModule {}
