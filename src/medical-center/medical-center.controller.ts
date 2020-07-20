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
import { Controller, Body, Param, Get, Delete,Post, Put, HttpException } from '@nestjs/common';
import { Utilities} from '../Utilities';
import { MedicalCenterService } from './medical-center.service';
import { MedicalCenter } from '../entities/medicalCenter.entity';

@Controller('medical-center')
export class MedicalCenterController{

    constructor (private readonly medicalServices: MedicalCenterService){}
    
    @Get()
    async getAll():Promise<MedicalCenter[]> {
        return this.medicalServices.findAll();
    }
    
    @Get(':idCenter')
    async getOne(@Param('idCenter') idCenter:string):Promise<MedicalCenter>{
        return this.medicalServices.findOne(idCenter);
    }

    @Post()
    async create (@Body() medicalData: MedicalCenter): Promise<MedicalCenter>{
        Utilities.checkParameterExistence(medicalData.address);
        Utilities.checkParameterExistence(medicalData.typeDocument);
        Utilities.checkParameterExistence(medicalData.numberDocument);
        Utilities.checkParameterExistence(medicalData.name);
        Utilities.checkParameterExistence(medicalData.phone);
        medicalData.isActive = true;
        return this.medicalServices.save(medicalData);
    }

    @Put(':id')
    async update(@Param('id') id:string, @Body() medicalData: MedicalCenter): Promise<MedicalCenter>{
        const medical: MedicalCenter = await this.medicalServices.findOne(id);
        medicalData.id = medical.id;        
        medicalData.name = medical.name;
        medicalData.typeDocument = medical.typeDocument;
        medicalData.numberDocument = medical.numberDocument;
        Utilities.checkParameterExistence(medicalData.address);
        Utilities.checkParameterExistence(medicalData.isActive);
        Utilities.checkParameterExistence(medicalData.phone);
        return this.medicalServices.save(medicalData);
    }

    @Delete(':id')
    async delete(@Param('id') id:string): Promise<MedicalCenter>{
        const medical: MedicalCenter = await this.medicalServices.findOne(id);
        medical.isActive = false;
        return this.medicalServices.save(medical);
    }
}