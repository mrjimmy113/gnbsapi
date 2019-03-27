const router = require('express').Router();
const db = require('../dbModules/dbType');

router.get('getAll', (req,res) => {
    db.getAll().then(result => res.status(200).json(result))
    .catch(err => res.status(500).json(err))
})