import dotenv from "dotenv"
import { DataSource } from "typeorm"
import { Cat } from "./entities/Cat";
import { Car } from "./entities/Car";
import { Film } from "./entities/Film";
import { Actor } from "./entities/Actor";


export {DataSource} from "typeorm";
dotenv.config()

export const AppDataSource = new DataSource({
    type: "mysql",
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT as string),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    synchronize: true,
    logging: false,
    entities: [Cat, Car, Actor, Film],
    migrations: [],
    subscribers: []
})