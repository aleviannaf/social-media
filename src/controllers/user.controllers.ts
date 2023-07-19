import { Request, Response } from "express";
import { User, UserCreate } from "../interfaces";
import { userServices } from "../services";

const create = async (req: Request, res: Response): Promise<Response> =>{
    
    const payload: UserCreate = req.body
    const newUser: User = await userServices.create(payload)

    return res.status(201).json(newUser)
}

export default { create }