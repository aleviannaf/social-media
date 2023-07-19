import { NextFunction, Request, Response } from "express";
import { UserResult } from "../interfaces";
import { client } from "../database";
import AppError from "../error";


const verifyUserIdParams = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
    
    const userId: number  = parseInt(req.params.id)

    const query: UserResult = await client.query(
        `SELECT * FROM "users" WHERE "email" = $1 `,
        [userId]
    )

    if(query.rowCount === 0) throw new AppError("User not found", 404)

    return next();
 }

 export default verifyUserIdParams