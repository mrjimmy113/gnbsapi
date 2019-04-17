const pg = require('../dbModules/pgConnection');
const dbOrder = require('../dbModules/dbOrder');
const dbDetail = require('../dbModules/dbDetail');
const dbProduct = require('../dbModules/dbProduct');
const dbColor = require('../dbModules/dbColor');

let createNewOrder = async (order) => {
    let client = pg.getClient();
    try {
        await client.connect().catch(err => {throw new Error(err)});
        await client.query('BEGIN').catch(err => {throw new Error(err)});
        const orderId = await dbOrder.create(client, order).catch(err => {throw new Error(err)});;
        order.details.forEach(detail => {
            dbProduct.increaseSell(client, detail.productId, detail.quantity).catch(err => {throw new Error(err)});
            dbDetail.create(client, detail, orderId).catch(err => {throw new Error(err)});
            if(detail.colorId) {
                dbColor.decreaseQuantity(client,detail.colorId,detail.quantity).catch(err => {throw new Error(err);});
            }else if(detail.sizeId) {

            }else {
                
            }
        }).catch(err => {throw new Error(err)});

        await client.query('COMMIT').then(() => console.log('da commit')).catch(err => {throw new Error(err)});
    
    } catch (err) {
        console.log('Order Service Error' + err);
        await client.query('ROLLBACK').then(() => console.log('ROLLBACK'))
    } finally {
        client.end();
    }



}

exports.createNewOrder = createNewOrder;


