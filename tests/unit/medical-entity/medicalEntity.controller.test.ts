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
import { MedicalEntityController} from '../../../src/medical-entity/medical-entity.controller'
import { MedicalEntityService} from '../../../src/medical-entity/medical-entity.service';
import { MedicalEntity} from '../../../src/entities/medicalEntity.entity';
import { TypeDocument } from '../../../src/entities/typeDocument.entity';
import { Repository} from 'typeorm';
import { getRepositoryToken} from '@nestjs/typeorm';
import { NotFoundException} from '@nestjs/common';

describe("IPS Controller", () => {
    let controller: MedicalEntityController;
    let repository: Repository<MedicalEntity>;

    const typeDoc = new TypeDocument();
    typeDoc.abbreviation = "RUT";
    typeDoc.name = "Registro único Tributario"; 

    let typeDoc2 = new TypeDocument();
    typeDoc2.abbreviation = "CC";
    typeDoc2.name = "Cédula de Ciudadanía"; 
    
    const medicalEntity: MedicalEntity={
        "id": "123",
        "name": "PruebaEntidadMedica",
        "numberDocument": "123456",
        "typeDocument": typeDoc,
        "phone": "2148863",
        "isActive": true
    };

    const medicalEntityTest2 = medicalEntity;

    beforeAll(async()=>{
        const module: TestingModule = await Test.createTestingModule({
            controllers:[MedicalEntityController],
            providers: [
                MedicalEntityService,{
                    provide: getRepositoryToken(MedicalEntity),
                    useClass: Repository
                }
            ]
        }).compile();
         controller = module.get<MedicalEntityController>(MedicalEntityController);
         repository = module.get<Repository<MedicalEntity>>(getRepositoryToken(MedicalEntity));    
         
    });
   
    it('Should be defined', () =>{
        expect(controller).toBeDefined();
    });  

    it('Create IPS', async() =>{
        
        jest.spyOn(repository,'save').mockResolvedValueOnce(medicalEntity);
        return expect(controller.create(medicalEntity)).resolves.toBe(medicalEntity)
    });

    it('GetAllElement - Element is Active', async() =>{
        const result = [medicalEntity];
        jest.spyOn(repository,'find').mockResolvedValue(result);
        return expect(controller.getAll()).resolves.toBe(result);
    });
        
    it('Update', async() =>{
        const ipsTest: MedicalEntity = {...medicalEntity, phone: "123456789"};
        jest.spyOn(repository,'findOne').mockResolvedValueOnce(medicalEntity);
        jest.spyOn(repository,'save').mockResolvedValueOnce(ipsTest);
        return expect(controller.update(ipsTest.id, ipsTest)).resolves.toBe(ipsTest);
    });

    it('Update ID', async() =>{
        jest.spyOn(repository,'findOne').mockResolvedValueOnce(medicalEntity);
        const ipsTest = {...medicalEntity, id: "1234"};
        jest.spyOn(repository,'save').mockResolvedValueOnce(ipsTest);
        return expect(controller.update("123",ipsTest)).resolves.toEqual(medicalEntityTest2);
    });

    it('Update Name', async() =>{
        jest.spyOn(repository,'findOne').mockResolvedValueOnce(medicalEntity);
        const medicalEntityTest = {...medicalEntity, name: "Prueba"};
        jest.spyOn(repository,'save').mockResolvedValueOnce(medicalEntityTest);
        return expect(controller.update("123",medicalEntityTest)).resolves.toEqual(medicalEntityTest2);
    });

    it('Update TypeDocument', async() =>{
        jest.spyOn(repository,'findOne').mockResolvedValueOnce(medicalEntity);
        const medicalEntityTest = {...medicalEntity, typeDocument: typeDoc2};
        //const medicalEntityTest2 = medicalEntity;
        jest.spyOn(repository,'save').mockResolvedValueOnce(medicalEntityTest);
        return expect(controller.update("123",medicalEntityTest)).resolves.toEqual(medicalEntityTest2);
    });

    it('Update NumberDocument', async() =>{
        jest.spyOn(repository,'findOne').mockResolvedValueOnce(medicalEntity);
        const ipsTest = {...medicalEntity, name: "111"};
        const ipsTest2 = medicalEntity;
        jest.spyOn(repository,'save').mockResolvedValueOnce(ipsTest);
        return expect(controller.update("123",ipsTest)).resolves.toEqual(ipsTest2);
    });

    it('isNotActive', async() =>{
        jest.spyOn(repository,'findOne').mockResolvedValueOnce(medicalEntity);
        jest.spyOn(repository,'save').mockResolvedValueOnce(medicalEntity);
        return expect(controller.delete(medicalEntity.id)).resolves.toStrictEqual(medicalEntity);
    }); 

    it('GetAllElement - Element is Not Active', async() =>{
        const result = [];
        jest.spyOn(repository,'find').mockResolvedValue(result);
        return expect(controller.getAll()).resolves.toBe(result);
    });

    it('GetElementExist', async() =>{
        jest.spyOn(repository,'findOne').mockResolvedValueOnce(medicalEntity);
        return expect(controller.getOne("123")).resolves.toBe(medicalEntity);
    });


    it.skip('GetElementNotExist', async() =>{
        jest.spyOn(repository,'findOne').mockResolvedValue(medicalEntity);
        return await expect(controller.getOne("1234")).resolves.toBe(NotFoundException);
    });
});