const pg = require('../dbModules/pgConnection');
const dbOrder = require('../dbModules/dbOrder');
const dbProduct = require('../dbModules/dbProduct');

let getReport =async () => {
    let client = pg.getClient();
    try {
        await client.connect().catch(err => {throw new Error(err)});
        let report = {
            totalRevenue: await dbOrder.countTotal(client).catch(err => {throw new Error(err)}),
            totalOrder: await dbOrder.countOrder(client).catch(err => {throw new Error(err)}),
            bestSeller: await dbProduct.bestSeller(client).catch(err => {throw new Error(err)}),
            orders: await dbOrder.getAll(client).catch(err => {throw new Error(err)}),
        };
        return report;
    } catch (error) {
        console.log("Report Service - GetReport: " + error );
    }finally{
        client.end();
    }
}

exports.getFullReport = getReport;