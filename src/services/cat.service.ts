import { error } from "console"
import { AppDataSource } from "../data-source"
import { Cat } from "../entities/Cat"
import { STATUS_CODES } from "http"

const computerRepository = AppDataSource.getRepository(Cat)

interface ICatData {
    id?: number
    user_id?: number
    cpu_cores: number
    memory_gb: number
}


export const getAllComputers = async () => {
    return await computerRepository.find ({
        relations: {
            user: true,
            parts: true
        }
    })
}

export const createComputer = async (computerData: IComputerData) => {
    const computer = await computerRepository.create(computerData)
    await computerRepository.save(computer)

    return {
        error: false,
        instend: computer
    }
}

export const updateComputer = async (computerData: IComputerData) => {
    const computer = await computerRepository.findOneBy({
        id: computerData.id
    })

    if(!computer) {
        return {
            error: true,
            statusCode: 404,
            message: "Not Found"
        }
    }

    computer.cpu_cores = computerData.cpu_cores;
    computer.memory_gb = computerData.memory_gb;
    await computerRepository.save(computer)

    return {
        error: false,
        statusCode: 200,
        message: "Updated",
        computer: computer
    }

}

export const deleteComputer = async (id: number) => {
    const computer = await computerRepository.findOneBy({
        id: id
    })

    if (!computer) {
        return {
            error: true,
            statusCode: 404,
            message: "Not Found"  
        }
    }


    await computerRepository.remove(computer)
    return {
        error: false,
        statusCode: 204
    }

}