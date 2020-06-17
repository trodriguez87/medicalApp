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
import { Injectable, NotFoundException } from '@nestjs/common';
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
        const event: Event = await this.eventRepository.findOne(idEvent);
        if(!event) {
                throw new NotFoundException()
        }
        return event;
    }

    async save(event: Event): Promise<Event>{
        return await this.eventRepository.save(event);
    }
}