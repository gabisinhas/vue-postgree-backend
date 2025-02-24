import pg from 'pg'
import { connectionString } from 'pg/lib/defaults'
const dotenv = require('dotenv')

dotenv.config()

const { Pool, Client } = pg
 
// pools will use environment variables
// for connection information
const pool = new Pool({
    connectionString: process.env.DATABASE_URL
})

pool.on('error', (err,client) =>{
    console.log("Unexpected error", err);
    process.exit(-1)
    
})

pool.on('connect',() =>{
    console.log('Base de Dados Conectado com Sucesso!');
    
})

module.exports = {
    query:(text,params) => pool.query(text,params),
}