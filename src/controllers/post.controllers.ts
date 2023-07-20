import { Request, Response } from "express";
import { Post, PostCreate, PostUpdate} from "../interfaces";
import { postServices } from "../services";

const create = async (req: Request, res: Response): Promise<Response> =>{
    
    const payload: PostCreate = req.body
    const newPost: Post = await postServices.create(payload)

    return res.status(201).json(newPost)
}

const update = async (req: Request, res: Response): Promise<Response> =>{
    
    const payload: PostUpdate = req.body
    
    const newPost: Post = await postServices.update(payload, req.params.id)

    return res.status(201).json(newPost)
}

const retrieve = async (req: Request, res: Response): Promise<Response> => {
    const post: Post = await postServices.retrieve(req.params.id);
    return res.status(200).json(post);
  };
  


export default { create, update, retrieve}