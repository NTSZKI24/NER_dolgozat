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

    @ManyToOne(() => Actor, (Actor) => Actor.films)
    @JoinColumn({
        name : "protagonist"
    })
    films: Film[]
    protagonist: any;

}