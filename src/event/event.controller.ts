import { Controller, Body, Param, Get, Delete,Post, Put, HttpException } from '@nestjs/common';
import { EventService } from './event.service'
import { Event } from '../entities/event.entity'



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

    @Put()
    async update( @Body() eventData: Event): Promise<any>{
        if(this.getOne(eventData.id)){
            return this.eventServices.notActive(eventData);
        }
    }

    @Delete()
    async delete(@Body() eventData: Event): Promise<any>{
        if(this.eventServices.findOne(eventData.id)){
            eventData.isActive = false;
            return this.eventServices.notActive(eventData);
        }
        
    }

}
