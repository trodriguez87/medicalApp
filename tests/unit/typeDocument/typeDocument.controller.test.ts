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
import { Test, TestingModule } from '@nestjs/testing';
import {DocumentController} from '../../../src/document/document.controller';
import {DocumentService} from '../../../src/document/document.service';
import {TypeDocument} from '../../../src/entities/typeDocument.entity';
import {Repository} from 'typeorm';
import {getRepositoryToken} from '@nestjs/typeorm';
import { NotFoundException} from '@nestjs/common';


describe("Type Document Controller", () => {
    let controller: DocumentController;
    let repository: Repository<TypeDocument>;

    const document = new TypeDocument();
    document.id = "123";
    document.abbreviation = "CC";
    document.name = "Cédula de Ciudadanía";
    document.isActive = true;

    const documentTest2 = document;

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
        jest.spyOn(repository,'findOne').mockResolvedValueOnce(document);
        jest.spyOn(repository,'save').mockResolvedValueOnce(document);
        return expect(controller.create(document)).resolves.toBe(document)
    });

    it('GetAllElement - Element is Active', async() =>{
        const result = [document];
        jest.spyOn(repository,'find').mockResolvedValue(result);
        return expect(controller.getAll()).resolves.toBe(result);
    });

    it('Update', async() =>{
        const documentTest: TypeDocument = {...document, name: "Cédula"};
        jest.spyOn(repository,'findOne').mockResolvedValueOnce(document);
        jest.spyOn(repository,'save').mockResolvedValueOnce(documentTest);
        return expect(controller.update(documentTest.id, documentTest)).resolves.toBe(documentTest);
    });

    it('Update ID', async() =>{
        jest.spyOn(repository,'findOne').mockResolvedValueOnce(document);
        const documentTest: TypeDocument = {...document, id: "12345"};
        jest.spyOn(repository,'save').mockResolvedValueOnce(documentTest);
        return expect(controller.update("123",documentTest)).resolves.toEqual(documentTest2);
    });

    it('isNotActive', async() =>{
        jest.spyOn(repository,'findOne').mockResolvedValueOnce(document);
        jest.spyOn(repository,'save').mockResolvedValueOnce(document);
        return expect(controller.delete(document.id)).resolves.toBe(document);
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
});