import { Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

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
}