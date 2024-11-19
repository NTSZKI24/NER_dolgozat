import { error } from "console"
import { AppDataSource } from "../data-source"
import { Cat } from "../entities/Cat"
import { STATUS_CODES } from "http"

const catRepository = AppDataSource.getRepository(Cat)

interface ICatData {
    id?: number
    name: string
    sex: string
    color: string
}


export const getAllCat = async () => {
    return await catRepository.find ({
        relations: {
            
        }
    })
}

export const createCat = async (catData: ICatData) => {
    const cat = await catRepository.create(catData)
    await catRepository.save(cat)

    return {
        error: false,
        instend: cat
    }
}

export const updateCat = async (catData: ICatData) => {
    const cat = await catRepository.findOneBy({
        id: catData.id
    })

    if(!cat) {
        return {
            error: true,
            statusCode: 404,
            message: "Not Found"
        }
    }

    
    await catRepository.save(cat)

    return {
        error: false,
        statusCode: 200,
        message: "Updated",
        cat: cat
    }

}

export const deleteCat = async (id: number) => {
    const cat = await catRepository.findOneBy({
        id: id
    })

    if (!cat) {
        return {
            error: true,
            statusCode: 404,
            message: "Not Found"  
        }
    }


    await catRepository.remove(cat)
    return {
        error: false,
        statusCode: 204
    }

}