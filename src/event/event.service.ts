import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm'
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm'
import { Event } from '../entities/event.entity';
import { Repository, UpdateResult, DeleteResult } from 'typeorm';


@Injectable()
export class EventService {
    constructor (@InjectRepository(Event) 
        private eventRepository: Repository<Event>){

    }

    async findAll(): Promise<Event[]>{
        return await this.eventRepository.find();
    }

    async findOne(idEvent: string): Promise<Event>{
        return await this.eventRepository.findOne(idEvent);
    }

    /*async findActive(active: string):Promise<Event[]>{
        return await this.eventRepository.find({where: {active: true}});
    }*/

    async create(event: Event): Promise<Event>{
        return await this.eventRepository.save(event);
    }

    async update(event: Event): Promise<UpdateResult>{
        return await this.eventRepository.update(event.id, event);
    }

    async delete (event: Event): Promise<UpdateResult>{
        return await this.eventRepository.update(event.id, event);
    }


}