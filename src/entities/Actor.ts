import { Column,  Entity,  JoinColumn,  ManyToMany,  OneToMany,  PrimaryGeneratedColumn, Timestamp } from "typeorm";



@Entity("actors")
export class Actor{
    @PrimaryGeneratedColumn()
    id: number 

    @Column()
    film_id: number

    @Column()
    name: string

    @Column()
    age: number

    

}