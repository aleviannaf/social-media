import { Client } from "pg";

const client: Client = new Client({
    user: 'aleviannaf',
    password: '2406',
    host: 'localhost',
    port: 5432,
    database: 'social'
})

const startDatabase = async (): Promise<void> => {
    await client.connect()
    console.log('Database conneted')
    
}

export { client, startDatabase}