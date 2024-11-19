import { Column,  Entity,  JoinColumn,  ManyToMany,  OneToMany,  PrimaryGeneratedColumn, Timestamp } from "typeorm";
import { Film } from "./Film";


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

    @OneToMany(() => Film, (films) => films.protagonist)
    films: Film[]
    

}