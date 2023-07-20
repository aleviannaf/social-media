import { QueryResult } from "pg"

interface Profile {
    id: number
    fullName: string
    gender?: string | null | undefined
    bio?: string | null | undefined
    profileImage?: string | null | undefined
    userId: number
}

type ProfileCreate = Omit<Profile, "id">
type ProfileResult = QueryResult<Profile>

export {Profile, ProfileCreate, ProfileResult}