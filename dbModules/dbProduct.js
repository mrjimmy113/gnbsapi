const pg = require('./pgConnection');


//#region GETALL
let getAll = () => {
    return new Promise((resolve, reject) => {
        let query = `SELECT * FROM public."product"`;
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
exports.getAll = getAll;
//#endregion 
//#region INSERT
let insert = (product) => {
    return new Promise((resolve, reject) => {
        let query = `INSERT INTO public.product(
            name, price, "isColored", "isSized","quantity", "createdDate")
            VALUES ('${product.name}', ${product.price},
             ${product.isColored}, ${product.isSized}, ${product.quantity},'${product.createdDate}');`;
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
exports.insert = insert;
//#endregion

