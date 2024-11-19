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
        id: req.body.id,
        brand: req.body.brand,
        model: req.body.model,
        fuel: req.body.fuel,
        color: req.body.color
    }))
})



router.put("/update/:id", async (req: Request, res: Response) => {
    const update = await updateCar({
        id: parseInt(req.params.id),
        brand: req.body.brand,
        model: req.body.model,
        fuel: req.body.fuel,
        color: req.body.color
    })

    res.status(update.statusCode).json(update)
    return
})


router.delete("/delete/:id", async (req: Request, res: Response) => {
    const deleted = await deleteCar(parseInt(req.params.id)) 

    res.status(deleted.statusCode).json(deleted)
})

export default router;