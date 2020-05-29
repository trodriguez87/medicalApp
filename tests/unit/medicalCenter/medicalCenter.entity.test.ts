import {validate} from 'class-validator';
import {MedicalCenter} from '../../../src/entities/medicalCenter.entity';
import {plainToClass} from 'class-transformer';
import { async } from 'rxjs/internal/scheduler/async';


let medical:MedicalCenter;
let medical2:MedicalCenter;
beforeEach(() =>{
    medical  = plainToClass (MedicalCenter,{
        "id": "123",
        "name": "PruebaEntidadMedica",
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








