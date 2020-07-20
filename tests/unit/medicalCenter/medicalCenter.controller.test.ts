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
import { MedicalCenterController} from '../../../src/medical-center/medical-center.controller';
import { MedicalCenterService} from '../../../src/medical-center/medical-center.service';
import { MedicalCenter} from '../../../src/entities/medicalCenter.entity';
import { Repository} from 'typeorm';
import { getRepositoryToken} from '@nestjs/typeorm';
import { NotFoundException} from '@nestjs/common';


describe("Medical Center Controller", () => {
    let controller: MedicalCenterController;
    let repository: Repository<MedicalCenter>;


    const event: Event={
        "id": "123",
        "name": "PruebaEntidadMedica",
        "preparation": "Preparacion Prueba",
        "isActive": true
    };

    const medical: MedicalCenter={
        "id": "123",
        "name": "PruebaEntidadMedica",
        "numberDocument": "123456",
        "typeDocument": "NIT",
        "address": "Fundación",
        "phone": "2148863",
        "events": [event],
        "isActive": true
    };

    const medicalTest2 = medical;

    beforeAll(async()=>{
        const module: TestingModule = await Test.createTestingModule({
            controllers:[MedicalCenterController],
            providers: [
                MedicalCenterService,{
                    provide: getRepositoryToken(MedicalCenter),
                    useClass: Repository
                }
            ]
        }).compile();
         controller = module.get<MedicalCenterController>(MedicalCenterController);
         repository = module.get<Repository<MedicalCenter>>(getRepositoryToken(MedicalCenter));    
         
    });
   
    it('Should be defined', () =>{
        expect(controller).toBeDefined();
    });  

    it('Create Medical Center', async() =>{
        jest.spyOn(repository,'findOne').mockResolvedValueOnce(medical);
        jest.spyOn(repository,'save').mockResolvedValueOnce(medical);
        return expect(controller.create(medical)).resolves.toBe(medical)
    });

    it('GetAllElement - Element is Active', async() =>{
        const result = [medical];
        jest.spyOn(repository,'find').mockResolvedValue(result);
        return expect(controller.getAll()).resolves.toBe(result);
    });
        
    it('Update', async() =>{
        const medicalTest: MedicalCenter = {...medical, address: "NuevaDir"};
        jest.spyOn(repository,'findOne').mockResolvedValueOnce(medical);
        jest.spyOn(repository,'save').mockResolvedValueOnce(medicalTest);
        return expect(controller.update(medicalTest.id, medicalTest)).resolves.toBe(medicalTest);
    });

    it('Update ID', async() =>{
        jest.spyOn(repository,'findOne').mockResolvedValueOnce(medical);
        const medicalTest = {...medical, id: "1234"};
        jest.spyOn(repository,'save').mockResolvedValueOnce(medicalTest);
        return expect(controller.update("123",medicalTest)).resolves.toEqual(medicalTest2);
    });

    it('Update Name', async() =>{
        jest.spyOn(repository,'findOne').mockResolvedValueOnce(medical);
        const medicalTest = {...medical, name: "Prueba"};
        const medicalTest2 = medical;
        jest.spyOn(repository,'save').mockResolvedValueOnce(medicalTest);
        return expect(controller.update("123",medicalTest)).resolves.toEqual(medicalTest2);
    });

    it('Update TypeDocument', async() =>{
        jest.spyOn(repository,'findOne').mockResolvedValueOnce(medical);
        const medicalTest = {...medical, typeDocument: "Prueba"};
        const medicalTest2 = medical;
        jest.spyOn(repository,'save').mockResolvedValueOnce(medicalTest);
        return expect(controller.update("123",medicalTest)).resolves.toEqual(medicalTest2);
    });

    it('Update NumberDocument', async() =>{
        jest.spyOn(repository,'findOne').mockResolvedValueOnce(medical);
        const medicalTest = {...medical, name: "111"};
        const medicalTest2 = medical;
        jest.spyOn(repository,'save').mockResolvedValueOnce(medicalTest);
        return expect(controller.update("123",medicalTest)).resolves.toEqual(medicalTest2);
    });

    it('isNotActive', async() =>{
        jest.spyOn(repository,'findOne').mockResolvedValueOnce(medical);
        jest.spyOn(repository,'save').mockResolvedValueOnce(medical);
        return expect(controller.delete(medical.id)).resolves.toStrictEqual(medical);
    }); 

    it('GetAllElement - Element is Not Active', async() =>{
        const result = [];
        jest.spyOn(repository,'find').mockResolvedValue(result);
        return expect(controller.getAll()).resolves.toBe(result);
    });

    it('GetElementExist', async() =>{
        jest.spyOn(repository,'findOne').mockResolvedValueOnce(medical);
        return expect(controller.getOne("123")).resolves.toBe(medical);
    });


    it.skip('GetElementNotExist', async() =>{
        jest.spyOn(repository,'findOne').mockResolvedValue(medical);
        return await expect(controller.getOne("1234")).resolves.toBe(NotFoundException);
    });
});