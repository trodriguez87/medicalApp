import { Controller, Body, Param, Get, Delete,Post, Put, HttpException } from '@nestjs/common';
import { MedicalCenterService } from './medical-center.service';
import { MedicalCenter } from '../entities/medicalCenter.entity';

@Controller('medical-center')
export class MedicalCenterController {

    constructor (private readonly medicalServices: MedicalCenterService){
    }
    
    @Get()
    async getAll():Promise<MedicalCenter[]> {
        return this.medicalServices.findAll();
    }
    
    @Get(':idCenter')
    async getOne(@Param('idCenter') idCenter:string):Promise<MedicalCenter>{
        return this.medicalServices.findOne(idCenter);
    }

    @Post()
    async create (@Body() medicalData: MedicalCenter): Promise<any>{
        return this.medicalServices.create(medicalData);
    }

    @Put()
    async update( @Body() medicalData: MedicalCenter): Promise<any>{
        if(this.getOne(medicalData.id)){
            return this.medicalServices.update(medicalData);
        }
    }

    @Delete()
    async delete(@Body() medicalData: MedicalCenter): Promise<any>{
        if(this.medicalServices.findOne(medicalData.id)){
            medicalData.isActive = false;
            return this.medicalServices.notActive(medicalData);
        }
        
    }

}
