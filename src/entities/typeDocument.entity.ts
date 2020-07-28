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
import { Entity, Column, PrimaryGeneratedColumn, OneToMany} from 'typeorm';
import { Length, IsOptional, IsUUID, IsDefined, IsBoolean} from 'class-validator';
import { MedicalCenter } from './medicalCenter.entity';

@Entity()
export class TypeDocument{ 
    
    @PrimaryGeneratedColumn("uuid")
    @IsUUID()
    @IsOptional()
    id: string;
    
    @Column({type: 'varchar', length: 10, unique: true, nullable:false})
    @IsDefined()
    @Length(0,10)
    abbreviation: string;
   
    @Column({type: 'varchar', length: 35, unique: true, nullable:false})
    @IsDefined()
    @Length(0,35)    
    name: string;
    
    @Column ({nullable: false})
    @IsDefined()
    @IsBoolean()
    isActive: boolean;

    @OneToMany(() => MedicalCenter, (medicalCenter) => medicalCenter.typeDocument)
    medicals: MedicalCenter[];
}