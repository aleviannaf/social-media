import format from "pg-format";
import { Post, PostCreate, PostResult, PostUpdate } from "../interfaces";
import { client } from "../database";

const create  = async (payload:PostCreate): Promise<Post> =>{
    payload.createAt = new Date()

    const queryString: string = format(
        `INSERT INTO "posts" (%I) VALUES (%L) RETURNING *;`,
        Object.keys(payload),
        Object.values(payload)
    )

    const query: PostResult = await client.query(queryString)

    return query.rows[0]
}

const update = async (payload: PostUpdate, postId: string): Promise<Post> => {
    const queryFormat: string = format(
      'UPDATE "posts" SET (%I) = ROW(%L) WHERE "id" = $1 RETURNING *;',
      Object.keys(payload),
      Object.values(payload)
    );
  
    const query: PostResult = await client.query(queryFormat, [postId]);
    return query.rows[0];
  };

  const retrieve = async (postId: string): Promise<Post> => {
    const queryTemplate: string = `
      SELECT
        "p"."id" AS "postId",
        "p"."title" AS "postTitle",
        "p"."content" AS "postContent",
        "p"."createAt" AS "postCreatedAt",
        "u"."id" AS "userId",
        "u"."email" AS "userEmail"
      FROM "posts" AS "p"
      LEFT JOIN "users" AS "u"
        ON "u"."id" = "p"."userId"
      WHERE "p"."id" = $1;
    `;
  
    const query: PostResult = await client.query(queryTemplate, [postId]);
    return query.rows[0];
  };

export default { create, update, retrieve }