import { Test, TestingModule } from '@nestjs/testing';
import {DiagnoseController} from '../../../src/diagnose/diagnose.controller';
import {DiagnoseService} from '../../../src/diagnose/diagnose.service';
import {Diagnose} from '../../../src/entities/diagnoses.entity';
import {Repository} from 'typeorm';
import {getRepositoryToken} from '@nestjs/typeorm';
import {ConflictException, NotFoundException} from '@nestjs/common';


describe("Diagnoses Controller", () => {
    let controller: DiagnoseController;
    let repository: Repository<Diagnose>;

    const diagnose: Diagnose={
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
        jest.spyOn(repository,'findOne').mockResolvedValueOnce(undefined);
        jest.spyOn(repository,'save').mockResolvedValueOnce(diagnose);
        return expect(controller.create(diagnose)).resolves.toBe(diagnose)
    });

    /*it('Create the same diagnose', async() =>{
        const diagnose2: Diagnose={
            "id": "123",
            "abbreviation": "PrDig",
            "name": "Prueba Diagnóstico",
            "description": "Prueba",
            "isActive": true
        };
        jest.spyOn(repository,'findOne').mockResolvedValueOnce(diagnose);
        jest.spyOn(repository,'save').mockResolvedValueOnce(diagnose2);
        return expect(controller.create(diagnose2)).resolves.toBe(ConflictException);
    });*/


    it('GetAllElement - Element is Active', async() =>{
        const result = [diagnose];
        jest.spyOn(repository,'find').mockResolvedValue(result);
        return expect(controller.getAll()).resolves.toBe(result);
    });

    /*it('Update', async() =>{
        jest.spyOn(repository,'findOne').mockResolvedValueOnce(diagnose);
        test = {...diagnose, description: "NuevaDes"};
        jest.spyOn(repository,'save').mockResolvedValueOnce(diagnose);
        return expect(controller.update(diagnose)).resolves.toBe(diagnose);
    });*/

    it('isNotActive', async() =>{
        jest.spyOn(repository,'findOne').mockResolvedValueOnce(diagnose);
        jest.spyOn(repository,'save').mockResolvedValueOnce(diagnose);
        return expect(controller.delete(diagnose)).resolves.toBe(diagnose);
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


    /*it('GetElementNotExist', async() =>{
        const diagnose2: Diagnose={
            "id": "123",
            "abbreviation": "PrDig",
            "name": "Prueba Diagnóstico",
            "description": "Prueba",
            "isActive": true
        };
        jest.spyOn(repository,'findOne').mockResolvedValueOnce(undefined);
        return expect(controller.getOne("1234")).resolves.toBe([]);
    });*/

});