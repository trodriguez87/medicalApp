import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm'
import { Repository, UpdateResult, DeleteResult } from 'typeorm';
import { MedicalCenter } from '../entities/medicalCenter.entity';

@Injectable()
export class MedicalCenterService {

    constructor (@InjectRepository(MedicalCenter) private medicalRepository: Repository<MedicalCenter>){

    }

    async findAll(): Promise<MedicalCenter[]>{
        return await this.medicalRepository.find({where: {isActive: true}});
    }

    async findOne(idCenter: string): Promise<MedicalCenter>{
        return await this.medicalRepository.findOne(idCenter);
    }

    async create(medical: MedicalCenter): Promise<MedicalCenter>{
        return await this.medicalRepository.save(medical);
    }

    async update(medical: MedicalCenter): Promise<MedicalCenter>{
        return await this.medicalRepository.save(medical);
    }

    async notActive (medical: MedicalCenter): Promise<MedicalCenter>{
        return await this.medicalRepository.save(medical);
    }

}
