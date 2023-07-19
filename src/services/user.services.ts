import format from "pg-format";
import { User, UserCreate, UserResult } from "../interfaces";
import { client } from "../database";

const create = async (payload: UserCreate): Promise<User> => {
    payload.registrationDate = new Date()

    const queryFormat: string = format(
        `INSERT INTO "users" (%I) VALUES (%L) RETURNING *;`,
        Object.keys(payload),
        Object.values(payload)
    )
    
    const queryResult: UserResult = await client.query(queryFormat)

    return queryResult.rows[0]
}

const retrieve = async (userId: number): Promise<User> => {
    
    const query: UserResult = await client.query(
        `SELECT * FROM "users" WHERE "id" = $1`,
        [userId]
    )

    return query.rows[0]
}

const destroy = async (userId: number): Promise<void> => {
    
    await client.query(
        `DELETE FROM "users" WHERE "id" = $1`,
        [userId]
    )
}

export default {create, retrieve, destroy}