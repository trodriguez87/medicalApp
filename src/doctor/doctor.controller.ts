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
import { DoctorService } from './doctor.service';
import { Doctor } from '../entities/doctor.entity';

@Controller('doctor')
export class DoctorController {

    constructor(private readonly doctorServices: DoctorService){}

    @Get()
    async getAll():Promise<Doctor[]>{
        return this.doctorServices.findAll();
    }

    @Get(':idDoctor')
    async getOne(@Param('idDoctor') idDoctor:string): Promise<Doctor>{
        return this.doctorServices.findOne(idDoctor);
    }

    @Post()
    async create(@Body() doctorData: Doctor): Promise<Doctor>{
        Utilities.checkParameterExistence(doctorData.numberDocument);
        Utilities.checkParameterExistence(doctorData.typeDocument);
        Utilities.checkParameterExistence(doctorData.name);
        Utilities.checkParameterExistence(doctorData.lastName);
        Utilities.checkParameterExistence(doctorData.phone);
        Utilities.checkParameterExistence(doctorData.email);
        Utilities.checkParameterExistence(doctorData.Scheduler);
        Utilities.checkParameterExistence(doctorData.events);
        Utilities.checkParameterExistence(doctorData.ips);        
        Utilities.checkParameterExistence(doctorData.medicalEntities);
        Utilities.checkParameterExistence(doctorData.medicalSpecialization);
        doctorData.isActive = true;
        return this.doctorServices.save(doctorData);
    }

    @Put(':idDoctor')
    async update(@Param('idDoctor') idDoctor: string, @Body() doctorData: Doctor): Promise<Doctor>{
        const doctor: Doctor = await this.doctorServices.findOne(idDoctor);
        doctorData.id = doctor.id;
        doctorData.typeDocument = doctor.typeDocument;
        doctorData.numberDocument = doctor.numberDocument;
        doctorData.name = doctor.name;
        doctorData.lastName = doctor.lastName;

        Utilities.checkParameterExistence(doctorData.phone);
        Utilities.checkParameterExistence(doctorData.email);
        Utilities.checkParameterExistence(doctorData.Scheduler);
        Utilities.checkParameterExistence(doctorData.events);
        Utilities.checkParameterExistence(doctorData.ips);        
        Utilities.checkParameterExistence(doctorData.medicalEntities);
        Utilities.checkParameterExistence(doctorData.medicalSpecialization);

        return this.doctorServices.save(doctorData);
    }

    @Delete(':idDoctor')
    async delete(@Param('idDoctor') idDoctor:string): Promise<Doctor>{
        const doctor: Doctor = await this.doctorServices.findOne(idDoctor);
        doctor.isActive = false;
        return this.doctorServices.save(doctor);
    }
}
