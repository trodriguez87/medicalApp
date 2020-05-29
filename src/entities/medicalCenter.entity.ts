import { Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

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
}