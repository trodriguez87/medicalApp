import { Entity, Column, PrimaryGeneratedColumn, OneToMany} from 'typeorm';


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