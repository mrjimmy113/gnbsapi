const router = require('express').Router();
const service = require('../serviceModules/reportService');

router.get('/full', (req,res) => {
    service.getFullReport().then(result => res.json(result))
    .catch(err => res.json(500));
})

module.exports = router;