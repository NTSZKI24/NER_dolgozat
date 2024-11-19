import { Column, Entity, JoinColumn, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Actor } from "./Actor";

@Entity("films")
export class Film {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    releasedate: number;

    @ManyToMany(() => Actor, (actor) => actor.films)
    @JoinColumn({
        name : "protagonist"
    })

    actors: Actor[];
}