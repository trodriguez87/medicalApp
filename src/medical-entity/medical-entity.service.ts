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
import { Repository } from 'typeorm';
import { MedicalEntity } from '../entities/medicalEntity.entity';


@Injectable()
export class MedicalEntityService {

    constructor (@InjectRepository(MedicalEntity) 
        private medicalEntityRepository: Repository<MedicalEntity>){
    }

    async findAll(): Promise<MedicalEntity[]>{
        return await this.medicalEntityRepository.find({where: {isActive: true}});
    }

    async findOne(idmedicalEntity: string): Promise<MedicalEntity>{
        const medicalEntity: MedicalEntity = await this.medicalEntityRepository.findOne(idmedicalEntity);
        if(!medicalEntity){
            throw new NotFoundException();
        }
        return medicalEntity;
    }

    async save(medicalEntity: MedicalEntity): Promise<MedicalEntity>{
        return await this.medicalEntityRepository.save(medicalEntity);
    }
}