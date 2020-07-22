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