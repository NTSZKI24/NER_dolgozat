import express, {Request, Response} from "express"
import { getAllCar, createCar, updateCar, deleteCar } from "../services/car.service";


const router = express.Router()


router.get("/", async (req: Request, res: Response) => {
    const cars = await getAllCar()

    res.json(cars)
    return
})


router.post("/create", async (req: Request, res: Response) => {
    res.status(201).json(await createCar({
        
    }))
})



router.put("/update/:id", async (req: Request, res: Response) => {
    const update = await updateCar({
        
    })

    res.status(update.statusCode).json(update)
    return
})


router.delete("/delete/:id", async (req: Request, res: Response) => {
    const deleted = await deleteCar(parseInt(req.params.id)) 

    res.status(deleted.statusCode).json(deleted)
})

export default router;