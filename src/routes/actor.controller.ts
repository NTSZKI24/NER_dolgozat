import express, {Request, Response} from "express"
import { getAllActor, createActor, updateActor, deleteActor } from "../services/actor.service";


const router = express.Router()


router.get("/", async (req: Request, res: Response) => {
    const actors = await getAllActor()

    res.json(actors)
    return
})


router.post("/create", async (req: Request, res: Response) => {
    res.status(201).json(await createActor({
        
    }))
})



router.put("/update/:id", async (req: Request, res: Response) => {
    const update = await updateActor({
        
    })

    res.status(update.statusCode).json(update)
    return
})


router.delete("/delete/:id", async (req: Request, res: Response) => {
    const deleted = await deleteActor(parseInt(req.params.id)) 

    res.status(deleted.statusCode).json(deleted)
})

export default router;