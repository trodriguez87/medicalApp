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
import { IPSController} from '../../../src/IPS/IPS.controller';
import { IPSService} from '../../../src/IPS/IPS.service';
import { IPS} from '../../../src/entities/IPS.entity';
import { TypeDocument } from '../../../src/entities/typeDocument.entity';
import { Repository} from 'typeorm';
import { getRepositoryToken} from '@nestjs/typeorm';
import { NotFoundException} from '@nestjs/common';

describe("IPS Controller", () => {
    let controller: IPSController;
    let repository: Repository<IPS>;

    const typeDoc = new TypeDocument();
    typeDoc.abbreviation = "RUT";
    typeDoc.name = "Registro único Tributario"; 

    let typeDoc2 = new TypeDocument();
    typeDoc2.abbreviation = "CC";
    typeDoc2.name = "Cédula de Ciudadanía"; 
    
    const ips: IPS={
        "id": "123",
        "name": "PruebaEntidadMedica",
        "numberDocument": "123456",
        "typeDocument": typeDoc,
        "address": "Fundación",
        "phone": "2148863",
        "isActive": true
    };

    const ipsTest2 = ips;

    beforeAll(async()=>{
        const module: TestingModule = await Test.createTestingModule({
            controllers:[IPSController],
            providers: [
                IPSService,{
                    provide: getRepositoryToken(IPS),
                    useClass: Repository
                }
            ]
        }).compile();
         controller = module.get<IPSController>(IPSController);
         repository = module.get<Repository<IPS>>(getRepositoryToken(IPS));    
         
    });
   
    it('Should be defined', () =>{
        expect(controller).toBeDefined();
    });  

    it('Create IPS', async() =>{
        
        jest.spyOn(repository,'save').mockResolvedValueOnce(ips);
        return expect(controller.create(ips)).resolves.toBe(ips)
    });

    it('GetAllElement - Element is Active', async() =>{
        const result = [ips];
        jest.spyOn(repository,'find').mockResolvedValue(result);
        return expect(controller.getAll()).resolves.toBe(result);
    });
        
    it('Update', async() =>{
        const ipsTest: IPS = {...ips, address: "NuevaDir"};
        jest.spyOn(repository,'findOne').mockResolvedValueOnce(ips);
        jest.spyOn(repository,'save').mockResolvedValueOnce(ipsTest);
        return expect(controller.update(ipsTest.id, ipsTest)).resolves.toBe(ipsTest);
    });

    it('Update ID', async() =>{
        jest.spyOn(repository,'findOne').mockResolvedValueOnce(ips);
        const ipsTest = {...ips, id: "1234"};
        jest.spyOn(repository,'save').mockResolvedValueOnce(ipsTest);
        return expect(controller.update("123",ipsTest)).resolves.toEqual(ipsTest2);
    });

    it('Update Name', async() =>{
        jest.spyOn(repository,'findOne').mockResolvedValueOnce(ips);
        const ipsTest = {...ips, name: "Prueba"};
        const ipsTest2 = ips;
        jest.spyOn(repository,'save').mockResolvedValueOnce(ipsTest);
        return expect(controller.update("123",ipsTest)).resolves.toEqual(ipsTest2);
    });

    it('Update TypeDocument', async() =>{
        jest.spyOn(repository,'findOne').mockResolvedValueOnce(ips);
        const ipsTest = {...ips, typeDocument: typeDoc2};
        const ipsTest2 = ips;
        jest.spyOn(repository,'save').mockResolvedValueOnce(ipsTest);
        return expect(controller.update("123",ipsTest)).resolves.toEqual(ipsTest2);
    });

    it('Update NumberDocument', async() =>{
        jest.spyOn(repository,'findOne').mockResolvedValueOnce(ips);
        const ipsTest = {...ips, name: "111"};
        const ipsTest2 = ips;
        jest.spyOn(repository,'save').mockResolvedValueOnce(ipsTest);
        return expect(controller.update("123",ipsTest)).resolves.toEqual(ipsTest2);
    });

    it('isNotActive', async() =>{
        jest.spyOn(repository,'findOne').mockResolvedValueOnce(ips);
        jest.spyOn(repository,'save').mockResolvedValueOnce(ips);
        return expect(controller.delete(ips.id)).resolves.toStrictEqual(ips);
    }); 

    it('GetAllElement - Element is Not Active', async() =>{
        const result = [];
        jest.spyOn(repository,'find').mockResolvedValue(result);
        return expect(controller.getAll()).resolves.toBe(result);
    });

    it('GetElementExist', async() =>{
        jest.spyOn(repository,'findOne').mockResolvedValueOnce(ips);
        return expect(controller.getOne("123")).resolves.toBe(ips);
    });


    it.skip('GetElementNotExist', async() =>{
        jest.spyOn(repository,'findOne').mockResolvedValue(ips);
        return await expect(controller.getOne("1234")).resolves.toBe(NotFoundException);
    });
});