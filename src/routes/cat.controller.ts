import express, {Request, Response} from "express"
import { getAllCats, createCat, updateCat, deleteCat } from "../services/cat.service";


const router = express.Router()


router.get("/", async (req: Request, res: Response) => {
    const cats = await getAllCats()

    res.json(cats)
    return
})


router.post("/create", async (req: Request, res: Response) => {
    res.status(201).json(await createCat({
        
    }))
})



router.put("/update/:id", async (req: Request, res: Response) => {
    const update = await updateCat({
        
    })

    res.status(update.statusCode).json(update)
    return
})


router.delete("/delete/:id", async (req: Request, res: Response) => {
    const deleted = await deleteCat(parseInt(req.params.id)) 

    res.status(deleted.statusCode).json(deleted)
})

export default router;