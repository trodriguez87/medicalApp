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
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Diagnose } from '../entities/diagnoses.entity';
import { Repository, UpdateResult, DeleteResult } from 'typeorm';

@Injectable()
export class DiagnoseService {

    constructor(@InjectRepository (Diagnose)
        private diagnoseRepository: Repository<Diagnose>){
    }

    async findAll(): Promise<Diagnose[]>{
        return await this.diagnoseRepository.find({where: {isActive: true}});
    }

    async findOne(idDiagnose: string): Promise<Diagnose>{
        const diagnose: Diagnose = await this.diagnoseRepository.findOne(idDiagnose)
        if(!diagnose) {
                throw new NotFoundException()
        }
        return diagnose;
    }

    async save(diagnose: Diagnose): Promise<Diagnose>{
        return await this.diagnoseRepository.save(diagnose);
    }

   
}
