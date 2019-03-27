const pg = require('./pgConnection');

//#region INSERT
let insert = (polish) => {
    return new Promise((resolve, reject) => {
        var query = `INSERT INTO public.polish(
            id, "brandId", price, quantity)
            VALUES ('${polish.id}', ${polish.brandId}, ${polish.price}, ${polish.quantity});`;
        let client = pg.getClient();
        client.connect().then(
            client.query(query,(err,res) => {
                if(err) reject(err);
                else resolve(res);
                client.end();
                return;
            })

        ).catch((err) => console.log(err))
    });
}
exports.insert = insert;
//#endregion
//#region UPDATE
let update = (polish, id, brandId) => {
    return new Promise((resolve,reject) => {
        let query = `UPDATE public.polish
        SET id='${polish.id}', "brandId"=${polish.brandId}, price=${polish.price}, quantity=${polish.quantity}
        WHERE id ='${id}' AND "brandId" = ${brandId};`;
        let client = pg.getClient();
        client.connect().then(
            client.query(query, (err,res) => {
                if(err) reject(err)
                else resolve();
                client.end();
                return;
            })
        ).catch(err=>console.log(err));
    })
}
exports.update = update;
//#endregion
//#region DELETE
let deleteItem = (id,brandId) => {
    return new Promise((resolve,reject) => {
        let query = `DELETE FROM public."polish" 
        WHERE id = '${id}' AND brandId = ${brandId}`;
        let client = pg.getClient();
        client.connect().then(
            client.query(query, (err,res) => {
                if(err) reject(err);
                else resolve();
                client.end();
                return;
            })
        ).catch(err => console.log(err));
    })
}
exports.delete = deleteItem;
//#endregion
//#region GETALL
let getAll = () => {
    return new Promise((resolve, reject) => {
        let query = `SELECT * FROM public."polish"`;
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