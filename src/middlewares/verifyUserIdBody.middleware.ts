import { NextFunction, Request, Response } from "express";
import AppError from "../error";
import { client } from "../database";
import { UserResult } from "../interfaces";

const verifyUserIdBody = async (
    req: Request, 
    res: Response, 
    next: NextFunction
): Promise<Response | void> => {

    const { userId } = req.body

    if(!userId) {
        return next()
    }

    const query: UserResult = await client.query(
        `SELECT * FROM "users" WHERE "id" = $1 `,
        [userId]
    )

    if(query.rowCount === 0) throw new AppError("User not found", 404)

    return next();
 }

 export default verifyUserIdBody