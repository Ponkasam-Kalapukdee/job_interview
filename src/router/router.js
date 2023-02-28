const express = require('express');
const {getAll, getByTermId, createShop, updateShop, deleteShop} = require('../controller/TermController.js');

const router = express.Router();

router.get('/terminals',getAll);
router.get('/terminals/:id',getByTermId);
router.post('/terminals',createShop);
router.put('/terminals',updateShop);
router.delete('/terminals/:id',deleteShop);

module.exports = router;