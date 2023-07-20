import { Profile, ProfileCreate } from "../interfaces"
import { profileServices } from "../services"
import { Request, Response } from "express"

const create = async (req: Request, res: Response): Promise<Response> =>{
    
    const payload: ProfileCreate = { ...req.body, userId: req.params.id }
    const profile: Profile = await profileServices.create(payload)
    

    return res.status(201).json(profile)
}

export default { create }