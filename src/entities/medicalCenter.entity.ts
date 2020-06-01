import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable} from 'typeorm';
import { Event } from './event.entity';

import { from } from 'rxjs';
import { type } from 'os';

@Entity()
export class MedicalCenter{ 

    @PrimaryGeneratedColumn("uuid")
    id: string;
    
    @Column({unique: true})
    name: string;
    
    @Column({nullable: false})
    address: string;
    
    @Column ({nullable: false})
    phone: string;
    
    @Column ({nullable: false})
    isActive: boolean;
    
    @ManyToMany(type => Event)
    @JoinTable()
    events: Event[];
}