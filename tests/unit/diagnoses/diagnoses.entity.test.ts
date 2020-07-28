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
import {Diagnose} from '../../../src/entities/diagnoses.entity';
import {plainToClass} from 'class-transformer';

let diagnose:Diagnose;
let diagnose2:Diagnose;
beforeEach(() =>{
    diagnose  = plainToClass (Diagnose,{
        "id": "38e73d77-7f5f-4128-9452-d344329c14c7",
        "abbreviation": "PrDig",
        "name": "Prueba Diagnóstico",
        "description": "Prueba",
        "isActive": true
    });

    diagnose2  = plainToClass (Diagnose,{
        "id": "38e73d77-7f5f-4128-9452-d344329c14c7",
        "abbreviation": "PrDig",
        "name": "Prueba Diagnóstico",
        "isActive": true
    });
});

it('diagnose all columns', async() => {
    expect(await validate(diagnose)).toEqual([]);
});

it('diagnose without description', async() => {
    expect(await validate(diagnose2)).toEqual([]);
});

it('Field ID is empty', async() =>{
    diagnose.id = '';
    expect (Error[0]).toBe(undefined);
});

it('Field ID is null', async() =>{
    diagnose.id = null;
    expect (Error[0]).toBe(undefined);
});

it('Field ID is undefined', async() =>{
    diagnose.id = undefined;
    expect (Error[0]).toBe(undefined);
});

it('Field Name is undefined', async() =>{
    diagnose.name = undefined;
    expect (Error[0]).toBe(undefined);
});

it('Field Name is empty', async() =>{
    diagnose.name = '';
    expect (Error[0]).toBe(undefined);
});

it('Field Name is null', async() =>{
    diagnose.name = null;
    expect (Error[0]).toBe(undefined);
});

it('Field Abbreviation is undefined', async() => {
    diagnose.abbreviation = undefined;
    expect(Error[0]).toBe(undefined);
});

it('Field Abbreviation is empty', async() => {
    diagnose.abbreviation = '';
    expect(Error[0]).toBe(undefined);
});

it('Field Abbreviation is null', async() => {
    diagnose.abbreviation = null;
    expect(Error[0]).toBe(undefined);
});

it('Field isActive is null', async() => {
    diagnose.isActive = null;
    expect(Error[0]).toBe(undefined);
});

it('Field isActive is undefined', async() => {
    diagnose.isActive = undefined;
    expect(Error[0]).toBe(undefined);
});