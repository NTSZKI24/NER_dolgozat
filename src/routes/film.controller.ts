import express, {Request, Response} from "express"
import { getAllFilm, createFilm, UpdateFilm, deleteFilm } from "../services/film.service";


const router = express.Router()


router.get("/", async (req: Request, res: Response) => {
    const films = await getAllFilm()

    res.json(films)
    return
})


router.post("/create", async (req: Request, res: Response) => {
    res.status(201).json(await createFilm({
        
    }))
})



router.put("/update/:id", async (req: Request, res: Response) => {
    const update = await UpdateFilm({
        
    })

    res.status(update.statusCode).json(update)
    return
})


router.delete("/delete/:id", async (req: Request, res: Response) => {
    const deleted = await deleteFilm(parseInt(req.params.id)) 

    res.status(deleted.statusCode).json(deleted)
})

export default router;