const router = require('express').Router();
const service = require('../serviceModules/orderService');

router.post('/create', (req,res) => {
    service.createNewOrder(req.body).then(() => res.status(200).json(200))
    .catch(err => {res.json(err); console.log('CL: ' + err)})
})




























module.exports = router;