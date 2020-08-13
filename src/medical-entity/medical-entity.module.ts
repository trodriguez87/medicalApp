/*
  This file is part of medicalApp.

    medicalApp is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    medicalApp is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with Foobar.  If not, see <https://www.gnu.org/licenses/>.
  

*/
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MedicalEntityController } from './medical-entity.controller';
import { MedicalEntityService } from './medical-entity.service';
import { MedicalEntity } from '../entities/medicalEntity.entity';



@Module({
  imports: [
    TypeOrmModule.forFeature([MedicalEntity])
  ],
  controllers: [MedicalEntityController],
  providers: [MedicalEntityService],  
  exports: [MedicalEntityService]
})
export class MedicalEntityModule {}
