import { NextFunction, Request, Response } from "express";
import { UserResult } from "../interfaces";
import { client } from "../database";
import AppError from "../error";


const uniqueEmail = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
    
    const { email } = req.body

    if(!email) return next()

    const query: UserResult = await client.query(
        `SELECT * FROM "users" WHERE "email" = $1 `,
        [email]
    )

    if(query.rowCount != 0) throw new AppError("Email already exists", 409)

    return next();
 }

 export default uniqueEmail