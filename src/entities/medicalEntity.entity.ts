import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn} from 'typeorm';
import { TypeDocument } from './typeDocument.entity';

@Entity()
export class MedicalEntity{ 
    @PrimaryGeneratedColumn("uuid")
    id: string;
    
    @Column({nullable: false, unique: true})
    name: string;
   
    @Column({nullable:false})
    phone: string;
    
   @Column({nullable:false, unique: true})
    numberDocument: string;

    @Column ({nullable: false})
    isActive: boolean;

    @OneToOne(type => TypeDocument)
    @JoinColumn()
    typeDocument: TypeDocument;
}