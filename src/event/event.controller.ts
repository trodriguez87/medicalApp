import { Controller, Body, Param, Get, Delete,Post, Put, HttpException } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud'
import { EventService } from './event.service'
import { Event } from '../entities/event.entity'

@Crud({
    model: {
      type: Event
    }
  })

@Controller('event')
export class EventController implements CrudController<Event>{
    constructor (
        public service: EventService){}


    /*@Get()
    async findAll(): Promise<Event> {
        return null; 
    }*/
}
