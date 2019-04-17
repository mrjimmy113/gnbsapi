
let create = (client, order) => {
    return new Promise((resolve, reject) => {
        let query = `INSERT INTO public."order"(
            total, "createdDate")
            VALUES (${order.total}, '${order.createdDate}')
            RETURNING id`
        client.query(query, (err, res) => {
            if (err) reject(err);
            else resolve(res.rows[0].id);
            return;
        })
    })
}
exports.create = create;

let countOrder = (client) => {
    return new Promise((resolve, reject) => {
        let query = `SELECT COUNT(*)
        FROM public."order"`;
        client.query(query, (err, res) => {
            if (err) reject(err);
            else resolve(res.rows[0].count);
            return;
        })
    })
}
exports.countOrder = countOrder;

let countTotal = (client) => {
    return new Promise((resolve, reject) => {
            let query = `SELECT SUM("total") 
                FROM public."order"`;
        client.query(query, (err, res) => {
            if (err) reject(err);
            else resolve(res.rows[0].sum);
            return;
        })
    })
}

exports.countTotal = countTotal;

let getAll = (client) => {
    return new Promise((resolve,reject) => {
        let query = `SELECT * FROM public."order"`;
        client.query(query,(err,res) => {
            if(err) reject(err);
            else resolve(res.rows);
            return;
        })
    })
}

exports.getAll = getAll;