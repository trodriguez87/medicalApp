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



let event:Event;
let event2:Event;
beforeEach(() =>{

    
    event  = plainToClass (Event,{
        "id": "38e73d77-7f5f-4128-9452-d344329c14c7",
        "name": "PruebaEntidadMedica",
        "preparation": "Preparacion Prueba",
        "isActive": true
    });
    event2  = plainToClass (Event,{
        "id": "38e73d77-7f5f-4128-9452-d344329c14c7",
        "name": "PruebaEntidadMedica",
        "isActive": true
    });
});    

it('Event all fields', async() => {
    expect(await validate(event)).toEqual([]);
});

it('Event without preparation', async() => {
    expect(await validate(event2)).toEqual([]);
});

it('Field ID is empty', async() =>{
    event.id = '';
    expect (Error[0]).toBe(undefined);
});

it('Field ID is undefined', async() =>{
    event.id = undefined;
    expect (Error[0]).toBe(undefined);
});

it('Field ID is null', async() =>{
    event.id = null;
    expect (Error[0]).toBe(undefined);
});

it('Field Name is empty', async() =>{
    event.name = '';
    expect (Error[0]).toBe(undefined);
});

it('Field Name is undefined', async() =>{
    event.name = undefined;
    expect (Error[0]).toBe(undefined);
});

it('Field Name is null', async() =>{
    event.name = null;
    expect (Error[0]).toBe(undefined);
});
