let create = (client, detail, orderId) => {
    return new Promise((resolve, reject) => {
        let query = `INSERT INTO public."orderDetail"(
            "orderId", "productId", "colorId", total, quantity)
            VALUES (${orderId}, ${detail.productId},
                 '${detail.colorId}', ${detail.money}, ${detail.quantity}); `
        client.query(query, (err, res) => {
            if (err) reject(err);
            else resolve();
            return;
        })
    })
}
exports.create = create;