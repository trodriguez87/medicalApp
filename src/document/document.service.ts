import { Injectable } from '@nestjs/common';
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
        return await this.documentRepository.findOne(idDocument);
    }

    async create(document: TypeDocument): Promise<TypeDocument>{
        return await this.documentRepository.save(document);
    }

    async update(document: TypeDocument): Promise<TypeDocument>{
        return await this.documentRepository.save(document);
    }

    async notActive (document: TypeDocument): Promise<TypeDocument>{
        return await this.documentRepository.save(document);
    }
    
}

