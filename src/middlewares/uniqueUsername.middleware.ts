import { NextFunction, Request, Response } from "express";
import { UserResult } from "../interfaces";
import { client } from "../database";
import AppError from "../error";


const uniqueUsername = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
    
    const { username } = req.body

    if(!username) return next()

    const query: UserResult = await client.query(
        `SELECT * FROM "users" WHERE "email" = $1 `,
        [username]
    )

    if(query.rowCount != 0) throw new AppError("Username already exists", 409)

    return next();
 }

 export default uniqueUsername