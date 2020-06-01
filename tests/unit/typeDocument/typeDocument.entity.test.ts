import {validate} from 'class-validator';
import {TypeDocument} from '../../../src/entities/typeDocument.entity';
import {plainToClass} from 'class-transformer';
import { async } from 'rxjs/internal/scheduler/async';


let typeDocument:TypeDocument;
let typeDocument2:TypeDocument;
beforeEach(() =>{
 
    typeDocument  = plainToClass (TypeDocument,{
        "id": "123",
        "abbreviation": "CC",
        "name": "Cédula de Ciudadanía",
        "isActive": true
    });
});

it('Type Document', async() => {
    expect(await validate(typeDocument)).toEqual([]);
});

it('Field ID is undefined', async() =>{
    typeDocument.id = '';
    expect (Error[0]).toBe(undefined);
});

it('Field Name is undefined', async() =>{
    typeDocument.name = '';
    expect (Error[0]).toBe(undefined);
});

it('Field Address is undefined', async() => {
    typeDocument.abbreviation = '';
    expect(Error[0]).toBe(undefined);
});
