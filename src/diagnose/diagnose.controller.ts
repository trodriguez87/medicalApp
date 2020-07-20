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
import { Controller,Body, Param, Get, Delete, Post, Put}  from '@nestjs/common';
import { Utilities} from '../Utilities';
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
    async create (@Body() diagnoseData: Diagnose): Promise<Diagnose>{
        Utilities.checkParameterExistence(diagnoseData.abbreviation);
        Utilities.checkParameterExistence(diagnoseData.name);
        diagnoseData.isActive = true;
        return this.diagnoseServices.save(diagnoseData);
    }

    @Put(':id')
    async update(@Param('id') id:string, @Body() diagnoseData: Diagnose): Promise<Diagnose>{
        const diagnose: Diagnose = await this.diagnoseServices.findOne(id);
        diagnoseData.id = diagnose.id;
        Utilities.checkParameterExistence(diagnoseData.abbreviation);
        Utilities.checkParameterExistence(diagnoseData.name);
        Utilities.checkParameterExistence(diagnoseData.isActive);
        return this.diagnoseServices.save(diagnoseData);
    }

    @Delete(':id')
    async delete(@Param('id') id:string): Promise<Diagnose>{
        const diagnose: Diagnose = await this.diagnoseServices.findOne(id);
        diagnose.isActive = false;
        return this.diagnoseServices.save(diagnose)
    }
}