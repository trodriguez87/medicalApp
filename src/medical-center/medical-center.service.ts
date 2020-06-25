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
import { InjectRepository } from '@nestjs/typeorm'
import { Repository} from 'typeorm';
import { MedicalCenter } from '../entities/medicalCenter.entity';

@Injectable()
export class MedicalCenterService {

    constructor (@InjectRepository(MedicalCenter) private medicalRepository: Repository<MedicalCenter>){

    }

    async findAll(): Promise<MedicalCenter[]>{
        return await this.medicalRepository.find({where: {isActive: true}});
    }

    async findOne(idCenter: string): Promise<MedicalCenter>{
        const medical: MedicalCenter = await this.medicalRepository.findOne(idCenter)
        if(!medical) {
                throw new NotFoundException()
        }
        return medical;
    }

    async save(medical: MedicalCenter): Promise<MedicalCenter>{
        return await this.medicalRepository.save(medical);
    }
}
