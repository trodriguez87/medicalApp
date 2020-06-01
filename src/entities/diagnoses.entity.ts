import { Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class Diagnose{ 
    @PrimaryGeneratedColumn("uuid")
    id: string;
    
    @Column({nullable: false})
    abbreviation: string;
   
    @Column({nullable:false})
    name: string;
    
    @Column({nullable:true})
    description: string;
    
    @Column ({nullable: false})
    isActive: boolean;
}