import { error } from "console"
import { AppDataSource } from "../data-source"
import { Actor } from "../entities/Actor"
import { STATUS_CODES } from "http"

const actorRepository = AppDataSource.getRepository(Actor)

interface IActorData {
    id?: number
    film_id?: number
    name: string
    age: number
}


export const getAllActor = async () => {
    return await actorRepository.find ({
        
    })
}

export const createActor = async (actorData: IActorData) => {
    const actor = await actorRepository.create(actorData)
    await actorRepository.save(actor)

    return {
        error: false,
        instend: actor
    }
}

export const updateActor = async (actorData: IActorData) => {
    const actor = await actorRepository.findOneBy({
        id: actorData.id
    })

    if(!actor) {
        return {
            error: true,
            statusCode: 404,
            message: "Not Found"
        }
    }

    
    await actorRepository.save(actor)

    return {
        error: false,
        statusCode: 200,
        message: "Updated",
        actor: actor
    }

}

export const deleteActor = async (id: number) => {
    const actor = await actorRepository.findOneBy({
        id: id
    })

    if (!actor) {
        return {
            error: true,
            statusCode: 404,
            message: "Not Found"  
        }
    }


    await actorRepository.remove(actor)
    return {
        error: false,
        statusCode: 204
    }

}