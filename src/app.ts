import express from "express"
import dotenv from "dotenv"
import { AppDataSource } from "./data-source"
import  catController  from "./routes/cat.controller"
import carController from "./routes/car.controller"
import actorController from "./routes/actor.controller"
import filmController from "./routes/film.controller"
/* import { logger } from "./middleware/loggingMiddleware" */

dotenv.config()

const app = express()

app.use(express.json())
/* app.use(logger()) */


app.use("/Cat", catController );
app.use("/Car", carController);
app.use("/Actor", actorController);
app.use("/Film", filmController);



app.listen(process.env.PORT, () => {
    console.log("Server is running")

    AppDataSource.initialize()
    .then(() => {
        console.log("Connected to database")
    })
})

