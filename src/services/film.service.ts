
import { AppDataSource } from "../data-source"
import { Film } from "../entities/Film"
import { Actor } from "../entities/Actor"


const filmRepository = AppDataSource.getRepository(Film)

interface IFilmData {
    id?: number
    title: string
    releasedate: number
    protagonist: string
}

export const getAllFilm = async () => {
    return await filmRepository.find({
        relations: {
            protagonist : true
        }
    })
}


export const createFilm = async (filmData: IFilmData) => {
    const film = await filmRepository.create(filmData)
    await filmRepository.save(film)

    return {
        error: false,
        inserted: film
    }
}

export const UpdateFilm = async (filmData: IFilmData) => {
    const film = await filmRepository.findOneBy({
        id: filmData.id
    })

    if(!film) {
        return {
            error: true,
            statusCode: 404,
            message: "Not Found"
        }
    }

    
    await filmRepository.save(film)

    return {
        error: false,
        statusCode: 200,
        message: "Updated",
        film: film
    }

}

export const deleteFilm = async (id: number) => {
    const film = await filmRepository.findOneBy({
        id: id
    })

    if (!film) {
        return {
            error: true,
            statusCode: 404,
            message: "Not Found"  
        }
    }


    await filmRepository.remove(film)
    return {
        error: false,
        statusCode: 204
    }

}