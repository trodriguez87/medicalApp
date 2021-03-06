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
import {DiagnoseController} from '../../../src/diagnose/diagnose.controller';
import {DiagnoseService} from '../../../src/diagnose/diagnose.service';
import {Diagnose} from '../../../src/entities/diagnoses.entity';
import {Repository} from 'typeorm';
import {getRepositoryToken} from '@nestjs/typeorm';
import { NotFoundException } from '@nestjs/common';


describe("Diagnoses Controller", () => {
    let controller: DiagnoseController;
    let repository: Repository<Diagnose>;

    const diagnose: Diagnose = {
        "id": "123",
        "abbreviation": "PrDig",
        "name": "Prueba Diagnóstico",
        "description": "Prueba",
        "isActive": true
    };

    beforeAll(async()=>{
        const module: TestingModule = await Test.createTestingModule({
            controllers:[DiagnoseController],
            providers: [
                DiagnoseService,{
                    provide: getRepositoryToken(Diagnose),
                    useClass: Repository
                }
            ]
        }).compile();
         controller = module.get<DiagnoseController>(DiagnoseController);
         repository = module.get<Repository<Diagnose>>(getRepositoryToken(Diagnose));    
    });

    it('Should be defined', () =>{
        expect(controller).toBeDefined();
    });  

    it('Create Diagnoses', async() =>{
        jest.spyOn(repository,'findOne').mockResolvedValueOnce(diagnose);
        jest.spyOn(repository,'save').mockResolvedValueOnce(diagnose);
        return expect(controller.create(diagnose)).resolves.toBe(diagnose)
    });

    it.skip('Create the same diagnose', async() =>{
        const diagnoseTest = diagnose;
        //jest.spyOn(repository,'findOne').mockResolvedValueOnce(diagnose);
        jest.spyOn(repository,'save').mockResolvedValueOnce(diagnoseTest);
        return expect(controller.create(diagnoseTest)).rejects.toEqual(Error('Internal server error'));
    });

    it('GetAllElement - Element is Active', async() =>{
        const result = [diagnose];
        jest.spyOn(repository,'find').mockResolvedValue(result);
        return expect(controller.getAll()).resolves.toBe(result);
    });

    it('Update', async() =>{
        const diagnoseTest = {...diagnose, description: "NuevaDescr"};
        jest.spyOn(repository,'findOne').mockResolvedValueOnce(diagnose);
        jest.spyOn(repository,'save').mockResolvedValueOnce(diagnoseTest);
        return expect(controller.update(diagnoseTest.id,diagnoseTest)).resolves.toBe(diagnoseTest);
    });

    it('Update ID', async() =>{
        jest.spyOn(repository,'findOne').mockResolvedValueOnce(diagnose);
        const diagnoseTest = {...diagnose, id: "1234"};
        const diagnoseTest2 = diagnose;
        jest.spyOn(repository,'save').mockResolvedValueOnce(diagnoseTest);
        return expect(controller.update("123",diagnoseTest)).resolves.toEqual(diagnoseTest2);
    });

    it('isNotActive', async() =>{
        const diagnoseTest = {...diagnose, isActive: false};
        jest.spyOn(repository,'findOne').mockResolvedValueOnce(diagnose);
        jest.spyOn(repository,'save').mockResolvedValueOnce(diagnose);
        return expect((controller.delete(diagnose.id))).resolves.toEqual(diagnoseTest);
    }); 

    it('GetAllElement - Element is Not Active', async() =>{
        const result = [];
        jest.spyOn(repository,'find').mockResolvedValue(result);
        return expect(controller.getAll()).resolves.toBe(result);
    });

    it('GetAnElemetExist', async() =>{
        jest.spyOn(repository,'findOne').mockResolvedValueOnce(diagnose);
        return expect(controller.getOne("123")).resolves.toBe(diagnose);
    });

    it.skip ('GetElementNotExist', async() =>{
        const result = [];
        const diagnoseTest = {...diagnose, id: "1234"};
        jest.spyOn(repository,'findOne').mockResolvedValueOnce(diagnose);
        return expect(controller.getOne(diagnoseTest.id)).rejects.toThrowError(NotFoundException);
    });
});