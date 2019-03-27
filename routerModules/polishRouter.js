const router = require('express').Router();
const db = require('../dbModules/dbPolish');

router.get('/getAll', (req,res) => {
    db.getAll().then((result) => res.status(200).json(result))
    .catch(err => res.status(500).json(err))
})
router.post('/create',(req,res) => {
    db.insert(req.body.polish).then(() => res.status(200).json(200))
    .catch(err => res.status(500).json(err));
})
router.post('/update',(req,res) => {
    db.update(req.body.polish).then(() => res.status(200).json(200))
    .catch(err => res.status(500).json(err));
})
router.post('/delete/:id&:brandId',(req,res) => {
    db.delete(req.params.id,req.params.brandId).then(() => res.status(200).json(200))
    .catch(err => res.status(500).json(err));
})

module.exports = router;