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
import { Controller, Body, Param, Get, Delete,Post, Put } from '@nestjs/common';
import { Utilities } from '../Utilities';
import { EventService } from './event.service'
import { Event } from '../entities/event.entity'



@Controller('event')
export class EventController{
    constructor (private readonly eventServices: EventService){}
    
    @Get()
    async getAll():Promise<Event[]> {
        return this.eventServices.findAll(); 
    }
    
    @Get(':idEvent')
    async getOne(@Param('idEvent') idEvent:string):Promise<Event>{
        return this.eventServices.findOne(idEvent);
    }

    @Post()
    async create(@Body() eventData: Event): Promise<Event>{  
        Utilities.checkParameterExistence(eventData.name);
        eventData.isActive = true;  
        return this.eventServices.save(eventData);
    }    

    @Put(':id')
    async update (@Param('id') id: string, @Body() eventData: Event):Promise<Event>{
        const event: Event = await this.eventServices.findOne(id);
        eventData.id = event.id;
        Utilities.checkParameterExistence(eventData.name);
        Utilities.checkParameterExistence(eventData.isActive);     
        return this.eventServices.save(eventData);
    }

    @Delete(':id')
    async delete(@Param('id') id: string):Promise<Event>{
        const event: Event = await this.eventServices.findOne(id);
        event.isActive = false;
        return this.eventServices.save(event);
    }
}