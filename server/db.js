const { Pool } = require('pg')

const pool = require('pg').Pool
require('dotenv').config()


const pool = new Pool({
    user: 'SterlingNewsom',
    password: '',
    host: 'localhost',
    port: 5432,
    database: 'todoappp'

})