const {Client} = require('pg');

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