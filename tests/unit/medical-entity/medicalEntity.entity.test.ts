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
import { validate } from 'class-validator';
import { TypeDocument } from '../../../src/entities/typeDocument.entity';
import { MedicalEntity } from '../../../src/entities/medicalEntity.entity';
import { plainToClass } from 'class-transformer';

let medical:MedicalEntity;

beforeEach(() =>{

    let typeDoc = new TypeDocument();
    typeDoc.abbreviation = "RUT";
    typeDoc.name = "Registro único Tributario"; 

    medical  = plainToClass (MedicalEntity,{
        "id": "38e73d77-7f5f-4128-9452-d344329c14c7",
        "name": "PruebaEntidadMedica",
        "numberDocument": "123456",
        "typeDocument": typeDoc,
        "phone": "2148863",
        "isActive": true
    });
});

it('Medical Entity', async() => {
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

it('Field Phone is empty', async() => {
    medical.phone = '';
    expect(await validate(medical)).toEqual([]);
});

it('Field Phone is undefined', async() => {
    medical.phone = undefined;
    expect(await validate(medical)).toEqual([]);
});

it('Field Phone is null', async() => {
    medical.phone = null;
    expect(await validate(medical)).toEqual([]);
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