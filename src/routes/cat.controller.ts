import express, {Request, Response} from "express"
import { createCat, deleteCat, getAllCat, updateCat } from "../services/cat.service"

const router = express.Router()

router.get("/", async (req: Request, res: Response) => {
    const cats = await getAllCat()

    res.json(cats)
    return
})

router.post("/create", async (req: Request, res: Response) => {
    res.status(201).json(await createCat({
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

    if(update.error){
        res.status(update.statusCode).json(update)
        return
    }else{
        res.status(update.statusCode).json(update)
    }
})

router.delete("/delete/:id", async (req: Request, res: Response) => {
    const deleted = await deleteCat(parseInt(req.params.id)) 

    res.status(deleted.statusCode).json(deleted)
})

export default router;