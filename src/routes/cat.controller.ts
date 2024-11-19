import express, {Request, Response} from "express"
import { getAllCat, createCat, updateCat, deleteCat } from "../services/cat.service";


const router = express.Router()


router.get("/", async (req: Request, res: Response) => {
    const cats = await getAllCat()

    res.json(cats)
    return
})


router.post("/create", async (req: Request, res: Response) => {
    res.status(201).json(await createCat({
        id: req.body.id,
        name: req.body.name,
        sex: req.body.sex,
        color: req.body.color
    }))
})



router.put("/update/:id", async (req: Request, res: Response) => {
    const update = await updateCat({
        id: parseInt(req.params.id),
        name: req.body.name,
        sex: req.body.sex,
        color: req.body.color
    })

    res.status(update.statusCode).json(update)
    return
})


router.delete("/delete/:id", async (req: Request, res: Response) => {
    const deleted = await deleteCat(parseInt(req.params.id)) 

    res.status(deleted.statusCode).json(deleted)
})

export default router;