import knex from 'knex';
import 'dotenv/config'

const connection = knex({
    client: "postgresql",
    connection: {
        host: process.env.DB_HOST,
        port: 3000,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        multipleStatements: true
    }, pool:{
      min:2,
      max:10
    }
})

export default connection;
