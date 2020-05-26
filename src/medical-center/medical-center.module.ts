import { Module } from '@nestjs/common';
import { MedicalCenterController } from './medical-center.controller';
import { MedicalCenterService } from './medical-center.service';
import { MedicalCenter } from '../entities/medicalCenter.entity';
import { TypeOrmModule } from '@nestjs/typeorm';


@Module({
  controllers: [MedicalCenterController],
  providers: [MedicalCenterService],
  imports: [
    TypeOrmModule.forFeature([MedicalCenter])
  ],
  exports: [MedicalCenterService]
})
export class MedicalCenterModule {}
