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
import { MedicalEntityService } from './medical-entity.service';
import { MedicalEntity } from '../entities/medicalEntity.entity';
import { Utilities } from '../Utilities';

@Controller('medical-entity')
export class MedicalEntityController {
       constructor (private readonly medicalEntityServices: MedicalEntityService){}
    
    @Get()
    async getAll():Promise<MedicalEntity[]> {
        return this.medicalEntityServices.findAll(); 
    }
    
    @Get(':idEntity')
    async getOne(@Param('idEntity') idEntity:string):Promise<MedicalEntity>{
        return this.medicalEntityServices.findOne(idEntity);
    }

    @Post()
    async create(@Body() entityData: MedicalEntity): Promise<MedicalEntity>{           
        Utilities.checkParameterExistence(entityData.name);
        Utilities.checkParameterExistence(entityData.numberDocument);
        Utilities.checkParameterExistence(entityData.typeDocument);
        entityData.isActive = true;
        return this.medicalEntityServices.save(entityData);
    }    

    @Put(':id')
    async update(@Param('id') id: string, @Body() entityData: MedicalEntity): Promise<MedicalEntity>{
        const medical: MedicalEntity = await this.medicalEntityServices.findOne(id);
        entityData.id = medical.id;
        entityData.name = medical.name;
        entityData.numberDocument = medical.numberDocument;
        entityData.typeDocument = medical.typeDocument;
        Utilities.checkParameterExistence(entityData.isActive);
        return this.medicalEntityServices.save(entityData);
    }

    @Delete(':id')
    async delete(@Param('id') id: string): Promise<MedicalEntity>{
        const medical: MedicalEntity = await this.medicalEntityServices.findOne(id);
        medical.isActive = false;
        return this.medicalEntityServices.save(medical);        
    }
}