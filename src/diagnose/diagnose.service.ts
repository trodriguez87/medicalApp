import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Diagnose } from '../entities/diagnoses.entity';
import { Repository, UpdateResult, DeleteResult } from 'typeorm';

@Injectable()
export class DiagnoseService {

    constructor(@InjectRepository (Diagnose)
        private diagnoseRepository: Repository<Diagnose>){

    }

    async findAll(): Promise<Diagnose[]>{
        return await this.diagnoseRepository.find();
    }

    async findOne(idDiagnose: string): Promise<Diagnose>{
        return await this.diagnoseRepository.findOne(idDiagnose);
    }

    async create(diagnose: Diagnose): Promise<Diagnose>{
        return await this.diagnoseRepository.save(diagnose);
    }

    async update(diagnose: Diagnose): Promise<UpdateResult>{
        return await this.diagnoseRepository.update(diagnose.id, diagnose);
    }

    async notActive (diagnose: Diagnose): Promise<UpdateResult>{
        return await this.diagnoseRepository.update(diagnose.id, diagnose);
    }
}
