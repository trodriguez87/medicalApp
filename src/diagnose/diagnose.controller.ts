import { Controller,Body, Param, Get, Delete, Post, Put, HttpException}  from '@nestjs/common';
import { DiagnoseService} from './diagnose.service';
import { Diagnose} from '../entities/diagnoses.entity';

@Controller('diagnose')
export class DiagnoseController {
    constructor(private readonly diagnoseServices:DiagnoseService){

    }

    @Get()
    async getAll(): Promise<Diagnose[]>{
        return this.diagnoseServices.findAll();
    }

    @Get(':idDiagnose')
    async getOne(@Param('idDiagnose') idDiagnose: string): Promise<Diagnose>{
        return this.diagnoseServices.findOne(idDiagnose);
    }

    @Post()
    async create (@Body() diagnosesData: Diagnose): Promise<any>{
        return this.diagnoseServices.create(diagnosesData);
    }

    @Put()
    async update( @Body() diagnoseData: Diagnose): Promise<any>{
        if(this.getOne(diagnoseData.id)){
            return this.diagnoseServices.update(diagnoseData);
        }
    }

    @Delete()
    async delete(@Body() diagnoseData: Diagnose): Promise<any>{
        if(this.diagnoseServices.findOne(diagnoseData.id)){
            diagnoseData.isActive = false;
            return this.diagnoseServices.notActive(diagnoseData);
        }
        
    }
}



