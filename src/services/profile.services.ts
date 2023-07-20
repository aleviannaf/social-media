import format from "pg-format";
import { Profile, ProfileCreate, ProfileResult } from "../interfaces";
import { client } from "../database";

const create  = async (payload: ProfileCreate): Promise<Profile> =>{
    const queryString: string = format(
        `INSERT INTO "profiles" (%I) VALUES (%L) RETURNING *;`,
        Object.keys(payload),
        Object.values(payload)
    )

    const query: ProfileResult = await client.query(queryString)

    return query.rows[0]
}

export default { create }