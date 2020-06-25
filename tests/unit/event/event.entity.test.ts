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
import {validate} from 'class-validator';
import {Event} from '../../../src/entities/event.entity';
import {plainToClass} from 'class-transformer';
import { async } from 'rxjs/internal/scheduler/async';


let event:Event;
let event2:Event;
beforeEach(() =>{
    event  = plainToClass (Event,{
        "id": "38e73d77-7f5f-4128-9452-d344329c14c7",
        "name": "PruebaEntidadMedica",
        "preparation": "Preparacion Prueba",
        "isActive": true
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