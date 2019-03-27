const router = require('express').Router();
const db = require('../dbModules/dbBrand');

router.get('/getAll', (req,res) => {
    db.getAll().then(result => res.status(200).json(result))
    .catch(err => res.status(500).json(err))
})

module.exports = router;