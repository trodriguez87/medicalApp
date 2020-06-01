import { Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class TypeDocument{ 
    
    @PrimaryGeneratedColumn("uuid")
    id: string;
    
    @Column({nullable: false, unique: true})
    abbreviation: string;
   
    @Column({nullable:false, unique: true})
    name: string;
    
    @Column ({nullable: false})
    isActive: boolean;
}