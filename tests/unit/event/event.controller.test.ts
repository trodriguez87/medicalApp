import { Test, TestingModule } from '@nestjs/testing';
import {EventController} from '../../../src/event/event.controller';
import {EventService} from '../../../src/event/event.service';
import {Event} from '../../../src/entities/event.entity';
import {Repository} from 'typeorm';
import {getRepositoryToken} from '@nestjs/typeorm';
import {ConflictException, NotFoundException} from '@nestjs/common';


describe("Event Center Controller", () => {
    let controller: EventController;
    let repository: Repository<Event>;

    const event: Event={
        "id": "123",
        "name": "PruebaEntidadMedica",
        "preparation": "Preparacion Prueba",
        "isActive": true
    };

    beforeAll(async()=>{
        const module: TestingModule = await Test.createTestingModule({
            controllers:[EventController],
            providers: [
                EventService,{
                    provide: getRepositoryToken(Event),
                    useClass: Repository
                }
            ]
        }).compile();
         controller = module.get<EventController>(EventController);
         repository = module.get<Repository<Event>>(getRepositoryToken(Event));    
    });

    it('Should be defined', () =>{
        expect(controller).toBeDefined();
    });  

    it('Create Event Center', async() =>{
        jest.spyOn(repository,'findOne').mockResolvedValueOnce(undefined);
        jest.spyOn(repository,'save').mockResolvedValueOnce(event);
        return expect(controller.create(event)).resolves.toBe(event)
    });

    it('GetAllElement - Element is Active', async() =>{
        const result = [event];
        jest.spyOn(repository,'find').mockResolvedValue(result);
        return expect(controller.getAll()).resolves.toBe(result);
    });

    /*it('Update', async() =>{
        jest.spyOn(repository,'findOne').mockResolvedValueOnce(event);
        test = {...this.event, name: 'nuevaDir'};
        jest.spyOn(repository,'save').mockResolvedValueOnce(event);
        return expect(controller.update(event)).resolves.toBe(event);
    });*/

    it('isNotActive', async() =>{
        jest.spyOn(repository,'findOne').mockResolvedValueOnce(event);
        jest.spyOn(repository,'save').mockResolvedValueOnce(event);
        return expect(controller.delete(event)).resolves.toBe(event);
    }); 

    it('GetAllElement - Element is Not Active', async() =>{
        const result = [];
        jest.spyOn(repository,'find').mockResolvedValue(result);
        return expect(controller.getAll()).resolves.toBe(result);
    });

    it('GetElemetExist', async() =>{
        jest.spyOn(repository,'findOne').mockResolvedValueOnce(event);
        return expect(controller.getOne("123")).resolves.toBe(event);
    });


    /*it('GetElementNotExist', async() =>{
        const event2: Event={
            "id": "1234",
            "name": "PruebaEntidadMedica",
            "preparation": "Preparacion Prueba",
            "isActive": true
        };
        jest.spyOn(repository,'findOne').mockResolvedValueOnce(undefined);
        return expect(controller.getOne("1234")).resolves.toBe([]);
    });*/

});