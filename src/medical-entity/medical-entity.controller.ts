import { Controller, Body, Param, Get, Delete,Post, Put, HttpException } from '@nestjs/common';
import { MedicalEntityService } from './medical-entity.service';
import { MedicalEntity } from 'src/entities/medicalEntity.entity';
import { TypeDocument } from 'src/entities/typeDocument.entity';



@Controller('medical-entity')
export class MedicalEntityController {
       constructor (private readonly medicalEntityServices: MedicalEntityService){
    }
    
    @Get()
    async getAll():Promise<MedicalEntity[]> {
        return this.medicalEntityServices.findAll(); 
    }
    
    @Get(':idEntity')
    async getOne(@Param('idEntity') idEntity:string):Promise<MedicalEntity>{
        return this.medicalEntityServices.findOne(idEntity);
    }

    @Post()
    async create(@Body() entityData: MedicalEntity): Promise<any>{           
        
        return this.medicalEntityServices.create(entityData);
    }    

    @Put()
    async update( @Body() entityData: MedicalEntity): Promise<any>{
        if(this.getOne(entityData.id)){
            return this.medicalEntityServices.update(entityData);
        }
    }

    @Delete()
    async delete(@Body() entityData: MedicalEntity): Promise<any>{
        if(this.medicalEntityServices.findOne(entityData.id)){
            entityData.isActive = false;
            return this.medicalEntityServices.notActive(entityData);
        }
        
    }

}