import { Column,  Entity,  JoinColumn,  ManyToMany,  OneToMany,  PrimaryGeneratedColumn, Timestamp } from "typeorm";

@Entity("films")
export class Film{
    @PrimaryGeneratedColumn()
    id: number 

    @Column()
    title: string

    @Column()
    releasedate: number

    @Column()
    protagonist: string

}