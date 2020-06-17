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
import { Controller,Body, Param, Get, Delete, Post, Put, HttpException}  from '@nestjs/common';
import { DiagnoseService} from './diagnose.service';
import { Diagnose} from '../entities/diagnoses.entity';

@Controller('diagnose')
export class DiagnoseController {
    constructor(private readonly diagnoseServices:DiagnoseService){}

    @Get()
    async getAll(): Promise<Diagnose[]>{
        return this.diagnoseServices.findAll();
    }

    @Get(':idDiagnose')
    async getOne(@Param('idDiagnose') idDiagnose: string): Promise<Diagnose>{
        return this.diagnoseServices.findOne(idDiagnose);
    }

    @Post()
    async create (@Body() diagnosesData: Diagnose): Promise<Diagnose>{
        async function checkParameterExistence(value: any) {
            if(value === null || !value || value === undefined) {
                throw new HttpException({
                    statusCode: 400,
                    error: 'Incorrect parameter(s).',
                    message: this.parameterExistenceError
                }, 400);
            }
        }
        return this.diagnoseServices.save(diagnosesData);
    }

    @Put(':id')
    async update(@Param('id') id:string, @Body() diagnoseData: Diagnose): Promise<Diagnose>{
        const diagnose: Diagnose = await this.diagnoseServices.findOne(id);
        diagnoseData.id = id;
        return this.diagnoseServices.save(diagnoseData);
        
    }

    @Delete(':id')
    async delete(@Param('id') id:string): Promise<Diagnose>{
        const diagnose: Diagnose = await this.diagnoseServices.findOne(id);
        diagnose.isActive = false;
        return this.diagnoseServices.save(diagnose)
    }
}



