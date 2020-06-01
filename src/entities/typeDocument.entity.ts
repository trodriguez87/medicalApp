import { Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class TypeDocument{ 
    
    @PrimaryGeneratedColumn("uuid")
    id: string;
    
    @Column({nullable: false})
    abbreviation: string;
   
    @Column({nullable:false})
    name: string;
    
    @Column ({nullable: false})
    isActive: boolean;
}