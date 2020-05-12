const express = require('express');
const { auth } = require('../../../secret');

const { paramValidation } = require('./books.validation')

const router = express.Router();
 
const c = require('./books.controller')
 
router.get('/', auth, c.findAll)
router.get('/:id', auth, paramValidation, c.findById)
router.post('/', auth,  c.insert)
router.put('/:id', auth, paramValidation, c.updateById)
router.delete('/:id', auth, paramValidation, c.removeById)
 
module.exports = router;