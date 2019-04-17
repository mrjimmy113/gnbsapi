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
//#region DELETE
let deleteProduct = (id) => {
    return new Promise((resolve, reject) => {
        let query = `DELETE FROM public."product" WHERE id = ${id}`;
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
exports.delete = deleteProduct;
//#endregion
//#region Update Quantity When Buying
let increaseSell = (client,id,quantity) => {
    return new Promise((resolve,reject) => {
        let query = `UPDATE public.product
        SET  selled= selled + ${quantity}
        WHERE id = ${id}`;
        client.query(query,(err,res) => {
            if(err) reject(err);
            else resolve();
            return;
        })
    })
}
exports.increaseSell = increaseSell;
//#endregion

//#region Get Best Sell Product
let bestSeller = (client) => {
    return new Promise((resolve,reject) => {
        let query = `SELECT * from public."product" WHERE "selled" = (SELECT MAX(selled) from public."product")`;
        client.query(query,(err,res) => {
            if(err) reject(err);
            else resolve(res.rows[0]);
            return;
        })
    })
}

exports.bestSeller = bestSeller;

