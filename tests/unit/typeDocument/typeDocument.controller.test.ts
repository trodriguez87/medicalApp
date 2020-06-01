import { Test, TestingModule } from '@nestjs/testing';
import {DocumentController} from '../../../src/document/document.controller';
import {DocumentService} from '../../../src/document/document.service';
import {TypeDocument} from '../../../src/entities/typeDocument.entity';

import {Repository} from 'typeorm';
import {getRepositoryToken} from '@nestjs/typeorm';
import {ConflictException, NotFoundException} from '@nestjs/common';


describe("Type Document Controller", () => {
    let controller: DocumentController;
    let repository: Repository<TypeDocument>;

    const document: TypeDocument={
        "id": "123",
        "abbreviation": "CC",
        "name": "Cédula de Ciudadanía",
        "isActive": true
    };

    beforeAll(async()=>{
        const module: TestingModule = await Test.createTestingModule({
            controllers:[DocumentController],
            providers: [
                DocumentService,{
                    provide: getRepositoryToken(TypeDocument),
                    useClass: Repository
                }
            ]
        }).compile();
         controller = module.get<DocumentController>(DocumentController);
         repository = module.get<Repository<TypeDocument>>(getRepositoryToken(TypeDocument));    
    });

    it('Should be defined', () =>{
        expect(controller).toBeDefined();
    });  

    it('Create Type Document', async() =>{
        jest.spyOn(repository,'findOne').mockResolvedValueOnce(undefined);
        jest.spyOn(repository,'save').mockResolvedValueOnce(document);
        return expect(controller.create(document)).resolves.toBe(document)
    });

    it('GetAllElement - Element is Active', async() =>{
        const result = [document];
        jest.spyOn(repository,'find').mockResolvedValue(result);
        return expect(controller.getAll()).resolves.toBe(result);
    });

    /*it('Update', async() =>{
        jest.spyOn(repository,'findOne').mockResolvedValueOnce(document);
        test = {...this.document, name: 'nuevo'};
        jest.spyOn(repository,'save').mockResolvedValueOnce(document);
        return expect(controller.update(document)).resolves.toBe(document);
    });*/

    it('isNotActive', async() =>{
        jest.spyOn(repository,'findOne').mockResolvedValueOnce(document);
        jest.spyOn(repository,'save').mockResolvedValueOnce(document);
        return expect(controller.delete(document)).resolves.toBe(document);
    }); 

    it('GetAllElement - Element is Not Active', async() =>{
        const result = [];
        jest.spyOn(repository,'find').mockResolvedValue(result);
        return expect(controller.getAll()).resolves.toBe(result);
    });

    it('GetElemetExist', async() =>{
        jest.spyOn(repository,'findOne').mockResolvedValueOnce(document);
        return expect(controller.getOne("123")).resolves.toBe(document);
    });


    /*it('GetElementNotExist', async() =>{
        const medical2: MedicalCenter={
            "id": "1234",
            "name": "Otro Centro",
            "address": "Otro",
            "phone": "Otro",
            "isActive": true
        };
        jest.spyOn(repository,'findOne').mockResolvedValueOnce(undefined);
        return expect(controller.getOne("1234")).resolves.toBe([]);
    });*/

});