import {validate} from 'class-validator';
import {Diagnose} from '../../../src/entities/diagnoses.entity';
import {plainToClass} from 'class-transformer';
import { async } from 'rxjs/internal/scheduler/async';


let diagnose:Diagnose;
let diagnose2:Diagnose;
beforeEach(() =>{
    diagnose  = plainToClass (Diagnose,{
        "id": "123",
        "abbreviation": "PrDig",
        "name": "Prueba Diagnóstico",
        "description": "Prueba",
        "isActive": true
    });

    diagnose2  = plainToClass (Diagnose,{
        "id": "123",
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

it('Field ID is undefined', async() =>{
    diagnose.id = '';
    expect (Error[0]).toBe(undefined);
});

it('Field Name is undefined', async() =>{
    diagnose.name = '';
    expect (Error[0]).toBe(undefined);
});

it('Field Abbreviation is undefined', async() => {
    diagnose.abbreviation = '';
    expect(Error[0]).toBe(undefined);
});