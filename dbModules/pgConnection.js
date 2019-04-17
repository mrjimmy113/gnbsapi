const {Client, Pool} = require('pg');

exports.getClient = () => {
    let client = new Client({
        user: 'postgres',
        host: 'localhost',
        database: 'gnbs',
        password: '',
        port: 5432,
    });
    return client;
}

exports.getPool = () => {
    let pool = new Pool({
        user: 'postgres',
        host: 'localhost',
        database: 'gnbs',
        password: '',
        port: 5432,
    });
    return pool;
}