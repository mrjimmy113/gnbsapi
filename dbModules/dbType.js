const pg = require('./pgConnection');

//GETALL
let getAll = () => {
    return new Promise((resolve, reject) => {
        let query =`SELECT * FROM public."type"`;
        let client = pg.getClient();
        client.connect().then(
            client.query(query, (err,res) => {
                if(err) reject(err)
                else resolve(res.rows);
                client.end();
                return;
            })
        ).catch(err => console.log(err))
    })
}
exports.getAll = getAll;