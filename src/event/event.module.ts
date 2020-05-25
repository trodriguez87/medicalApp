import { Module } from '@nestjs/common';
import { EventService } from './event.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Event } from '../entities/event.entity';
import { EventController } from './event.controller';

@Module({
    controllers: [EventController],
    providers: [EventService],
    imports: [
      TypeOrmModule.forFeature([Event])
    ],
    exports: [EventService]
  })
export class EventModule {}
