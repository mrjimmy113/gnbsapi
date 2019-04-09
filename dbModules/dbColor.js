const pg = require('./pgConnection');

let getAllById = (id) => {
    return new Promise((resolve, reject) => {
        let query = `SELECT * FROM public."color" where "productId" =${id}`;
        let client = pg.getClient();
        client.connect().then(
            client.query(query,(err,res) => {
                if(err) reject(err);
                else resolve(res.rows);
                client.end();
                return;
            })
        ).catch(err => console.log(err));
    })
}
exports.getAllById = getAllById;

let create = (color) => {
    return new Promise((resolve, reject) => {
        let query = `INSERT INTO public.color(
            id, "productId", quantity)
            VALUES ('${color.id}', ${color.productId}, ${color.quantity})`;
        let client = pg.getClient();
        client.connect().then(
            client.query(query,(err,res) => {
                if(err) reject(err);
                else resolve();
                client.end();
                return;
            })
        ).catch(err => console.log(err));
    })
}
exports.create = create;