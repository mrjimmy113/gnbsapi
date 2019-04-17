const router = require('express').Router();
const db = require('../dbModules/dbProduct');
router.get('/getAll', (req,res) => {
    db.getAll().then(result => res.status(200).json(result))
    .catch(err => res.json(err));
})

router.post('/create', (req,res) => {
    db.insert(req.body).then(() => res.status(200).json(200))
    .catch(err =>{ res.json(500)
    })
})
router.delete('/remove/:id', (req,res) => {
    db.delete(req.params.id).then(() => res.status(200).json(200))
    .catch(err =>{ res.json(500)
    })
})

module.exports = router;