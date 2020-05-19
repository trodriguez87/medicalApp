import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm'
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm'
import { Event } from '../entities/event.entity';
import { Repository } from 'typeorm'

@Injectable()
export class EventService extends TypeOrmCrudService<Event> {
	constructor (@InjectRepository(Event) eventRepository: Repository<Event>){
        super(eventRepository);
    }
    
    async findAll(): Promise<Event[]>{
        return null; 
        //return this.eventRepository.findAll();
    }
}