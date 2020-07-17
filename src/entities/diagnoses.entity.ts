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
import { Entity, Column, PrimaryGeneratedColumn} from 'typeorm';
import { Length, IsOptional, IsUUID, IsDefined, IsBoolean} from 'class-validator';

@Entity()
export class Diagnose{ 

    @PrimaryGeneratedColumn("uuid")
    @IsUUID()
    @IsOptional()
    id: string;

    @Column({type: 'varchar', length: 30, nullable:false, unique: true})
    @IsDefined()
    @Length(2,30)
    abbreviation: string;

    @Column({type: 'varchar', length: 30, nullable:false, unique: true})
    @IsDefined()
    @Length(2,30)
    name: string;

    @Column({type: 'varchar', length: 60, nullable:true})
    @IsOptional()
    @Length(0,60)
    description: string;

    @Column ({nullable: false})
    @IsBoolean()
    isActive: boolean;
}