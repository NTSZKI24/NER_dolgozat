import { Column,  Entity,  JoinColumn,  ManyToMany,  OneToMany,  PrimaryGeneratedColumn, Timestamp } from "typeorm";

@Entity("cats")
export class Cat{
    @PrimaryGeneratedColumn()
    id: number 

    @Column()
    name: string

    @Column()
    sex: string

    @Column()
    color: string

}