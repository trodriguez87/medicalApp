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
import { Repository } from 'typeorm';
import { TypeDocument} from '../entities/typeDocument.entity';

@Injectable()
export class DocumentService {

    constructor(@InjectRepository (TypeDocument)
        private documentRepository: Repository<TypeDocument>){
    }

    async findAll(): Promise<TypeDocument[]>{
        return await this.documentRepository.find({where: {isActive: true}});
    }

    async findOne(idDocument: string): Promise<TypeDocument>{
        const document: TypeDocument = await this.documentRepository.findOne(idDocument);
        if(!document){
            throw new NotFoundException();
        }
        return document;
    }

    async save(document: TypeDocument): Promise<TypeDocument>{
        return await this.documentRepository.save(document);
    }
}