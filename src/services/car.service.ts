import { error } from "console"
import { AppDataSource } from "../data-source"
import { Car } from "../entities/Car"
import { STATUS_CODES } from "http"

const carRepository = AppDataSource.getRepository(Car)

interface ICarData {
    id?: number
    brand: string
    model: string
    fuel: string
    color: string
}


export const getAllCar = async () => {
    return await carRepository.find ({
        
    })
}

export const createCar = async (carData: ICarData) => {
    const car = await carRepository.create(carData)
    await carRepository.save(car)

    return {
        error: false,
        instend: car
    }
}

export const updateCar = async (carData: ICarData) => {
    const car = await carRepository.findOneBy({
        id: carData.id
    })

    if(!car) {
        return {
            error: true,
            statusCode: 404,
            message: "Not Found"
        }
    }

    
    await carRepository.save(car)

    return {
        error: false,
        statusCode: 200,
        message: "Updated",
        car: car
    }

}

export const deleteCar = async (id: number) => {
    const car = await carRepository.findOneBy({
        id: id
    })

    if (!car) {
        return {
            error: true,
            statusCode: 404,
            message: "Not Found"  
        }
    }


    await carRepository.remove(car)
    return {
        error: false,
        statusCode: 204
    }

}