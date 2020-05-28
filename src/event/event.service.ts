import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm'
import { Event } from '../entities/event.entity';
import { Repository, UpdateResult, DeleteResult } from 'typeorm';


@Injectable()
export class EventService {
    constructor (@InjectRepository(Event) 
        private eventRepository: Repository<Event>){

    }

    async findAll(): Promise<Event[]>{
        return await this.eventRepository.find({where: {isActive: true}});
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

    async update(event: Event): Promise<Event>{
        return await this.eventRepository.save(event);
    }

    async notActive (event: Event): Promise<Event>{
        return await this.eventRepository.save(event);
    }


}