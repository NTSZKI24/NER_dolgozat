import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Actor } from "./Actor";

@Entity("films")
export class Film {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    releasedate: number;

    @ManyToOne(() => Actor, (actor) => actor.films)
    protagonist: Actor

}