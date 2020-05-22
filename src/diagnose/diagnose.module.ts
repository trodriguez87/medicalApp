import { Module } from '@nestjs/common';
import { DiagnoseController } from './diagnose.controller';
import { DiagnoseService } from './diagnose.service';
import { Diagnose } from '../entities/diagnoses.entity'
import {TypeOrmModule} from '@nestjs/typeorm';

@Module({
  controllers: [DiagnoseController],
  providers: [DiagnoseService],
  imports: [
    TypeOrmModule.forFeature([Diagnose])
  ],
  exports: [DiagnoseService]
})
export class DiagnoseModule {}
