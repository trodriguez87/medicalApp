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
import {MedicalCenter} from '../../../src/entities/medicalCenter.entity';
import {plainToClass} from 'class-transformer';

let medical:MedicalCenter;

beforeEach(() =>{
    medical  = plainToClass (MedicalCenter,{
        "id": "38e73d77-7f5f-4128-9452-d344329c14c7",
        "name": "PruebaEntidadMedica",
        "document" : "123456",
        "address": "Fundación",
        "phone": "2148863",
        "isActive": true
    });
});

it('Medical Center', async() => {
    expect(await validate(medical)).toEqual([]);
});

it('Field ID is undefined', async() =>{
    medical.id = '';
    expect (Error[0]).toBe(undefined);
});

it('Field Name is undefined', async() =>{
    medical.name = '';
    expect (Error[0]).toBe(undefined);
});

it('Field Address is undefined', async() => {
    medical.address = '';
    expect(Error[0]).toBe(undefined);
});

it('Field Phone is undefined', async() => {
    medical.phone = '';
    expect(Error[0]).toBe(undefined);
});

it('Field Document is undefined', async() => {
    medical.document = '';
    expect(Error[0]).toBe(undefined);
});






