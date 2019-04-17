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

let decreaseQuantity  = (client,productId,quantity) => {
    return new Promise((resolve,reject) => {
        let query = `UPDATE public.color
        SET quantity= quantity - ${quantity}
        WHERE id = '${productId}'`;
        client.query(query,(err,res) => {
            if(err) reject(err);
            else resolve();
            return;
        })
    })
}
exports.decreaseQuantity = decreaseQuantity

let increaseQuantity  = (client,colorId,quantity) => {
    return new Promise((resolve,reject) => {
        let query = `UPDATE public.color
        SET quantity = quantity + ${quantity}
        WHERE id = '${colorId}'`;
        client.query(query,(err,res) => {
            if(err) reject(err);
            else resolve();
            return;
        })
    })
}
exports.increaseQuantity = increaseQuantity;