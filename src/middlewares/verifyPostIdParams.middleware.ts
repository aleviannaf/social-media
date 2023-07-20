import { NextFunction, Request, Response } from "express";
import AppError from "../error";
import { client } from "../database";
import { UserResult } from "../interfaces";

const verifyPostIdParams = async (
    req: Request, 
    res: Response, 
    next: NextFunction
): Promise<Response | void> => {

    const query: UserResult = await client.query(
        `SELECT * FROM "posts" WHERE "id" = $1 `,
        [ req.params.id]
    )

    if(query.rowCount === 0) throw new AppError("Post not found", 404)

    return next();
 }

 export default verifyPostIdParams