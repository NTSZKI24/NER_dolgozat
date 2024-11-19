import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Film } from "./Film";

@Entity("actors")
export class Actor {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    age: number;

    @ManyToMany(() => Film, (film) => film.protagonist)
    films: Film[];
}