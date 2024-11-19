import { Column,  Entity,  JoinColumn,  ManyToMany,  OneToMany,  PrimaryGeneratedColumn, Timestamp } from "typeorm";


@Entity("cars")
export class Car{
    @PrimaryGeneratedColumn()
    id: number 

    @Column()
    brand: string

    @Column()
    model: string

    @Column()
    fuel: string

    @Column()
    color: string

}