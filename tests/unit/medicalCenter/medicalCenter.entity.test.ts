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
import {Event} from '../../../src/entities/event.entity';
import {plainToClass} from 'class-transformer';

let medical:MedicalCenter;

beforeEach(() =>{


    const event: Event={
        "id": "123",
        "name": "PruebaEntidadMedica",
        "preparation": "Preparacion Prueba",
        "isActive": true
    };

    medical  = plainToClass (MedicalCenter,{
        "id": "38e73d77-7f5f-4128-9452-d344329c14c7",
        "name": "PruebaEntidadMedica",
        "numberDocument": "123456",
        "typeDocument": "NIT",
        "address": "Fundación",
        "phone": "2148863",
        "events": [event],
        "isActive": true
    });
});

it('Medical Center', async() => {
    expect(await validate(medical)).toEqual([]);
});

it('Field ID is empty', async() =>{
    medical.id = '';
    expect (Error[0]).toBe(undefined);
});

it('Field ID is undefined', async() =>{
    medical.id = undefined;
    expect (Error[0]).toBe(undefined);
});

it('Field ID is null', async() =>{
    medical.id = null;
    expect (Error[0]).toBe(undefined);
});

it('Field Name is empty', async() =>{
    medical.name = '';
    expect (Error[0]).toBe(undefined);
});

it('Field Name is undefined', async() =>{
    medical.name = undefined;
    expect (Error[0]).toBe(undefined);
});

it('Field Name is null', async() =>{
    medical.name = null;
    expect (Error[0]).toBe(undefined);
});

it('Field Address is empty', async() => {
    medical.address = '';
    expect(Error[0]).toBe(undefined);
});

it('Field Address is undefined', async() => {
    medical.address = undefined;
    expect(Error[0]).toBe(undefined);
});

it('Field Address is null', async() => {
    medical.address = null;
    expect(Error[0]).toBe(undefined);
});

it('Field Phone is empty', async() => {
    medical.phone = '';
    expect(Error[0]).toBe(undefined);
});

it('Field Phone is undefined', async() => {
    medical.phone = undefined;
    expect(Error[0]).toBe(undefined);
});

it('Field Phone is null', async() => {
    medical.phone = null;
    expect(Error[0]).toBe(undefined);
});

it('Field Type Document is empty', async() => {
    medical.typeDocument = '';
    expect(Error[0]).toBe(undefined);
});

it('Field Type Document is undefined', async() => {
    medical.typeDocument = undefined;
    expect(Error[0]).toBe(undefined);
});

it('Field Type Document is null', async() => {
    medical.typeDocument = null;
    expect(Error[0]).toBe(undefined);
});

it('Field Number Document is empty', async() => {
    medical.numberDocument = '';
    expect(Error[0]).toBe(undefined);
});

it('Field Number Document is undefined', async() => {
    medical.numberDocument = undefined;
    expect(Error[0]).toBe(undefined);
});

it('Field Number Document is null', async() => {
    medical.numberDocument = null;
    expect(Error[0]).toBe(undefined);
});