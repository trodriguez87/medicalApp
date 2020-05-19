import { Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class Event{ 
    @PrimaryGeneratedColumn()
    id: String;
    @Column({nullable: false})
    name: String;
    @Column()
    preparation: String;
    @Column ({nullable: false})
    isActive: Boolean;
}