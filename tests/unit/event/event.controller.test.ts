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
import { EventController} from '../../../src/event/event.controller';
import { EventService} from '../../../src/event/event.service';
import { Event} from '../../../src/entities/event.entity';
import { Repository} from 'typeorm';
import { getRepositoryToken} from '@nestjs/typeorm';
import { NotFoundException} from '@nestjs/common';


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
        jest.spyOn(repository,'findOne').mockResolvedValueOnce(event);
        jest.spyOn(repository,'save').mockResolvedValueOnce(event);
        return expect(controller.create(event)).resolves.toBe(event)
    });

    it('GetAllElement - Element is Active', async() =>{
        const result = [event];
        jest.spyOn(repository,'find').mockResolvedValue(result);
        return expect(controller.getAll()).resolves.toBe(result);
    });

    it('Update', async() =>{
        const eventTest = {...event, address: "NuevaDir"};
        jest.spyOn(repository,'findOne').mockResolvedValueOnce(event);
        jest.spyOn(repository,'save').mockResolvedValueOnce(eventTest);
        return expect(controller.update(eventTest.id, eventTest)).resolves.toBe(eventTest);
    });

    it('Update ID', async() =>{
        jest.spyOn(repository,'findOne').mockResolvedValueOnce(event);
        const eventTest = {...event, id: "1234"};
        const eventTest2 = event;
        jest.spyOn(repository,'save').mockResolvedValueOnce(eventTest);
        return expect(controller.update("123", eventTest)).resolves.toEqual(eventTest2);
    });

    it('Delete', async() =>{
        jest.spyOn(repository,'findOne').mockResolvedValueOnce(event);
        jest.spyOn(repository,'save').mockResolvedValueOnce(event);
        return expect(controller.delete(event.id)).resolves.toBe(event);
    }); 

    it('GetAllElement - Element is Not Active', async() =>{
        const result = [];
        jest.spyOn(repository,'find').mockResolvedValue(result);
        return expect(controller.getAll()).resolves.toBe(result);
    });

    it('GetOneElemetExist', async() =>{
        jest.spyOn(repository,'findOne').mockResolvedValueOnce(event);
        return expect(controller.getOne("123")).resolves.toBe(event);
    });

    it.skip('GetOneElementNotExist', async() =>{
        jest.spyOn(repository,'findOne').mockResolvedValueOnce(undefined);
        return expect(controller.getOne("1234")).rejects.toThrowError(NotFoundException);
    });
});