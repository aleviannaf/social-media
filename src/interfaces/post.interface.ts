import { QueryResult } from "pg"

interface Post {
    id: number
    title: string
    contest: string
    createAt: Date
    userId: number | null | undefined
}

type PostCreate = Omit<Post, "id">
type PostUpdate = Partial<PostCreate>
type PostResult = QueryResult<Post>

export {Post, PostCreate, PostResult, PostUpdate}