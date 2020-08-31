import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Doctor } from 'src/entities/doctor.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DoctorService {

    constructor(@InjectRepository(Doctor) private doctorRepository: Repository<Doctor>){}

    async findAll(): Promise<Doctor[]>{
        return await this.doctorRepository.find({
                where: {isActive:true}, 
                relations:['typeDocument','medicalEntities','ips','events']
            });
    }

    async findOne(idDoctor: string): Promise <Doctor>{
        const doctor: Doctor = await this.doctorRepository.findOne(
            idDoctor, 
            {relations:['typeDocument','medicalEntities','ips','events']
        });

        if(!doctor){
            throw new NotFoundException();
        }
        return doctor;
    } 

    async save(doctor: Doctor):Promise<Doctor>{
        return await this.doctorRepository.save(doctor);
    }
}