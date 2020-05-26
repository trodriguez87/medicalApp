import { Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class MedicalCenter{ 
    @PrimaryGeneratedColumn("uuid")
    id: string;
    @Column({nullable: false})
    name: string;
    @Column({nullable: false})
    address: string;
    @Column ({nullable: false})
    phone: string;
}