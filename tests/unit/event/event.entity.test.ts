import {validate} from 'class-validator';
import {Event} from '../../../src/entities/event.entity';
import {plainToClass} from 'class-transformer';
import { async } from 'rxjs/internal/scheduler/async';
import { MedicalCenter } from 'src/entities/medicalCenter.entity';


let event:Event;
let event2:Event;
beforeEach(() =>{

    const medical: MedicalCenter={
        "id": "123",
        "name": "PruebaEntidadMedica",
        "address": "Fundación",
        "phone": "2148863",
        "isActive": true
    };
    
    event  = plainToClass (Event,{
        "id": "123",
        "name": "PruebaEntidadMedica",
        "preparation": "Preparacion Prueba",
        "isActive": true,
        "medicalCenter": medical
    });
});    

it('Event', async() => {
    expect(await validate(event)).toEqual([]);
});

it('Field ID is undefined', async() =>{
    event.id = '';
    expect (Error[0]).toBe(undefined);
});

it('Field Name is undefined', async() =>{
    event.name = '';
    expect (Error[0]).toBe(undefined);
});

it('Field Prepation is undefined', async() => {
    event.preparation = '';
    expect(await validate(event)).toEqual([]);
});

