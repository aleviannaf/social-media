import { Request, Response } from "express";
import { User, UserCreate, UserUpdate } from "../interfaces";
import { userServices } from "../services";

const create = async (req: Request, res: Response): Promise<Response> =>{
    
    const payload: UserCreate = req.body
    const newUser: User = await userServices.create(payload)

    return res.status(201).json(newUser)
}

const retrieve = async (req: Request, res: Response): Promise<Response> =>{
    
    const userId: number = parseInt(req.params.id)
    const user: User = await userServices.retrieve(userId)

    return res.status(200).json(user)
}

const destroy = async (req: Request, res: Response): Promise<Response> =>{
    
    const userId: number = parseInt(req.params.id)
    
    await userServices.destroy(userId)

    return res.status(204).send()
}

const update = async (req: Request, res: Response): Promise<Response> =>{
    
    const userId: number = parseInt(req.params.id)
    const payload: UserUpdate = req.body
    
    const newUser = await userServices.update(payload ,userId)

    return res.status(201).json(newUser)
}



export default { create, retrieve, destroy, update }