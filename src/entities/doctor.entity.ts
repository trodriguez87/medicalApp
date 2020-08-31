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
import { Entity, Column, PrimaryGeneratedColumn, Index, ManyToOne, ManyToMany, JoinTable} from 'typeorm';
import { Length, IsOptional, IsUUID, IsDefined, IsBoolean} from 'class-validator';
import { TypeDocument } from './typeDocument.entity';
import { MedicalEntity } from './medicalEntity.entity';
import { Event } from './event.entity';
import { IPS } from './IPS.entity';

@Entity()
export class Doctor{ 

    @PrimaryGeneratedColumn("uuid")
    @IsUUID()
    @IsOptional()
    id: string;

    @Column({type: 'varchar', length: 30, nullable:false, unique:true})
    @IsDefined()
    @Length(2,30)
    numberDocument: string;

    @Column({type: 'varchar', length: 30, nullable:false})
    @IsDefined()
    @Length(2,30)
    name: string;

    @Column({type: 'varchar', length: 50, nullable:false})
    @IsDefined()
    @Length(2,50)
    lastName: string;

    @Column({type: 'varchar', length: 30, nullable:false})
    @IsDefined()
    @Length(2,30)
    medicalSpecialization: string;
    
    @Column({type: 'varchar', length: 15, nullable:false})
    @IsDefined()
    @Length(2,15)
    phone: string;

    @Column({type: 'varchar', length: 35, nullable:false})
    @IsDefined()
    @Length(2,35)
    email: string;

    @Column({type: 'varchar', length: 30, nullable:false})
    @IsDefined()
    @Length(2,30)
    Scheduler: string;

    @Column ({nullable: false})
    @IsBoolean()
    isActive: boolean;

    @ManyToOne (() => TypeDocument, (typeDocument: TypeDocument) => typeDocument.doctor)
    typeDocument: TypeDocument;

    @ManyToMany(() => MedicalEntity)
    @JoinTable()
    medicalEntities: MedicalEntity[];

    @ManyToMany(() => Event)
    @JoinTable()
    events: Event[];

    @ManyToMany(() => IPS)
    @JoinTable()
    ips: IPS[];
}