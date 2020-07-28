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
import { Entity, Column, PrimaryGeneratedColumn,ManyToMany, JoinTable, ManyToOne} from 'typeorm';
import { Length, IsOptional, IsUUID, IsDefined, IsBoolean} from 'class-validator';
import { Event } from './event.entity';
import { TypeDocument } from './typeDocument.entity';


@Entity()
export class MedicalCenter{ 

    @PrimaryGeneratedColumn("uuid")
    @IsUUID()
    @IsOptional()
    id: string;

    @Column({type: 'varchar', length: 30, unique: true, nullable:false})
    @IsDefined()
    @Length(0,30)
    name: string;
    
    @Column({type: 'varchar', length: 30, unique:true, nullable:false})
    @IsDefined()
    @Length(0,30)
    numberDocument: string;

    @Column({type: 'varchar', length: 100, nullable: false})
    @IsDefined()
    @Length(0,100)
    address: string;
    
    @Column ({type: 'varchar', length: 20, nullable: false})
    @IsDefined()
    @Length(0,20)
    phone: string;
    
    @Column ({nullable: false})
    @IsDefined()
    @IsBoolean()
    isActive: boolean;

    @ManyToOne (() => TypeDocument, (typeDoocument) => typeDoocument.medicals)
    typeDocument: TypeDocument;
}