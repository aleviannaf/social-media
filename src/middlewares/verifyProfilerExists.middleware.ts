import { NextFunction, Request, Response } from "express";
import { ProfileResult } from "../interfaces";
import { client } from "../database";
import AppError from "../error";

const verifyProfileExists = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<Response | void> => {
    const query: ProfileResult = await client.query(
        `SELECT * FROM "profiles" WHERE "userId" = $1`,
        [req.params.id]
    )

    if(query.rowCount != 0) {
        throw new AppError("Profile already exists", 409)
    }

    return next()
}

export default verifyProfileExists