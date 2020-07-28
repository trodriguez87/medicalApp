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
import {TypeDocument} from '../../../src/entities/typeDocument.entity';
import {plainToClass} from 'class-transformer';

let typeDocument:TypeDocument;
let typeDocument2:TypeDocument;
beforeEach(() =>{
    typeDocument  = plainToClass (TypeDocument,{
        "id": "38e73d77-7f5f-4128-9452-d344329c14c7",
        "abbreviation": "CC",
        "name": "Cédula de Ciudadanía",
        "isActive": true
    });
});

it('Type Document', async() => {
    expect(await validate(typeDocument)).toEqual([]);
});

it('Field ID is empty', async() =>{
    typeDocument.id = '';
    expect (Error[0]).toBe(undefined);
});

it('Field ID is null', async() =>{
    typeDocument.id = null;
    expect (Error[0]).toBe(undefined);
});

it('Field ID is undefined', async() =>{
    typeDocument.id = undefined;
    expect (Error[0]).toBe(undefined);
});

it('Field Name is undefined', async() =>{
    typeDocument.name = undefined;
    expect (Error[0]).toBe(undefined);
});

it('Field Name is empty', async() =>{
    typeDocument.name = '';
    expect (Error[0]).toBe(undefined);
});

it('Field Name is null', async() =>{
    typeDocument.name = null;
    expect (Error[0]).toBe(undefined);
});

it('Field Abbreviation is undefined', async() => {
    typeDocument.abbreviation = undefined;
    expect(Error[0]).toBe(undefined);
});

it('Field Abbreviation is empty', async() => {
    typeDocument.abbreviation = '';
    expect(Error[0]).toBe(undefined);
});

it('Field Abbreviation is null', async() => {
    typeDocument.abbreviation = null;
    expect(Error[0]).toBe(undefined);
});

it('Field isActive is null', async() => {
    typeDocument.isActive = null;
    expect(Error[0]).toBe(undefined);
});

it('Field isActive is undefined', async() => {
    typeDocument.isActive = undefined;
    expect(Error[0]).toBe(undefined);
});