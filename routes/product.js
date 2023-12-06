const express = require('express');
const router = express.Router();

/// controller
const { list, read, update, create, remove } = require('../controllers/product')

router.post('/product', create)
router.get('/product', list)
router.get('/product/:id', read)
router.put('/product/:id', update)
router.delete('/product/:id', remove)


module.exports = router;