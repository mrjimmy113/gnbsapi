const router = require('express').Router();
const db = require('../dbModules/dbColor');
router.get('/getAllById/:id', (req,res) => {
    db.getAllById(req.params.id).then(result => res.status(200).json(result))
    .catch(err => res.status(500).json(err));
})

router.post('/create', (req,res) => {
    db.create(req.body).then(() => res.status(200).json(200))
    .catch(err => res.status(500).json(500))
})

module.exports = router;