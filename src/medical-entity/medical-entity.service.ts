import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm'
import { Repository, UpdateResult, DeleteResult } from 'typeorm';
import { MedicalEntity } from 'src/entities/medicalEntity.entity';


@Injectable()
export class MedicalEntityService {
    constructor (@InjectRepository(MedicalEntity) 
        private medicalEntityRepository: Repository<MedicalEntity>){

    }

    async findAll(): Promise<MedicalEntity[]>{
        return await this.medicalEntityRepository.find({where: {isActive: true}});
    }

    async findOne(idmedicalEntity: string): Promise<MedicalEntity>{
        return await this.medicalEntityRepository.findOne(idmedicalEntity);
    }

    async create(medicalEntity: MedicalEntity): Promise<MedicalEntity>{
        return await this.medicalEntityRepository.save(medicalEntity);
    }

    async update(medicalEntity: MedicalEntity): Promise<MedicalEntity>{
        return await this.medicalEntityRepository.save(medicalEntity);
    }
    
    async notActive (medicalEntity: MedicalEntity): Promise<MedicalEntity>{
        return await this.medicalEntityRepository.save(medicalEntity);
    }


}