import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn} from 'typeorm';
import { MedicalCenter } from './medicalCenter.entity';

@Entity()
export class Event{ 
    @PrimaryGeneratedColumn("uuid")
    id: string;
    
    @Column({nullable: false})
    name: string;
    
    @Column({nullable: true})
    preparation: string;
    
    @Column ({nullable: false})
    isActive: boolean;

    @OneToOne(type => MedicalCenter)
    @JoinColumn()
    medicalCenter: MedicalCenter;
}