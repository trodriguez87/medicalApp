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
import { IPS } from '../entities/IPS.entity';

@Injectable()
export class IPSService {

    constructor (@InjectRepository(IPS) private medicalRepository: Repository<IPS>){}

    async findAll(): Promise<IPS[]>{
        return await this.medicalRepository.find({
            where: {isActive: true},
            relations:['typeDocument']
        });
    }

    async findOne(idCenter: string): Promise<IPS>{
        const medical: IPS = await this.medicalRepository.findOne(idCenter,{
            relations:['typeDocument']
        })
        if(!medical) {
            throw new NotFoundException();
        }
        return medical;
    }

    async save(medical: IPS): Promise<IPS>{
        return await this.medicalRepository.save(medical);
    }
}
