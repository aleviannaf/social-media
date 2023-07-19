import { QueryResult } from "pg"

interface User {
    id: number
    username: string
    password: string
    email: string
    registrationDate: Date
}

type UserCreate = Omit<User, "id">
type UserUpdate = Partial<UserCreate>
type UseRead = Array<User>
type UserResult = QueryResult<User>

export { User, UserCreate, UseRead, UserResult, UserUpdate}