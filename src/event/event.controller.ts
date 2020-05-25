import { Controller, Body, Param, Get, Delete,Post, Put, HttpException } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud'
import { EventService } from './event.service'
import { Event } from '../entities/event.entity'
import { get } from 'http';


@Controller('event')
export class EventController {
    constructor (private readonly eventServices: EventService){
    }
    
    @Get()
    async getAll():Promise<Event[]> {
        return this.eventServices.findAll(); 
    }
    
    @Get(':idEvent')
    async getOne(@Param('idEvent') idEvent:string):Promise<Event>{
        return this.eventServices.findOne(idEvent);
    }

    /*@Get(':isActive')
    async getActive(@Param('isActive') isActive:string): Promise<Event[]>{
        return this.eventServices.findActive(isActive);
    }*/

    @Post()
    async create(@Body() eventData: Event): Promise<any>{           

        return this.eventServices.create(eventData);
    }    

    @Put(':id')
    async update (@Param('id') id: string, @Body() eventData: Event):Promise<any>{
        eventData.id = id;
        return this.eventServices.update(eventData);
    }

    @Delete(':id')
    async delete(@Param('id') id: string, @Body() eventData: Event):Promise<any>{
        eventData.id = id;
        return this.eventServices.update(eventData);

    }

}
