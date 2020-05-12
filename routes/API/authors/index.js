const express = require('express');
const { auth } = require('../../../secret');

const { validation, paramValidation } = require('./authors.validation')

const router = express.Router();
 
const c = require('./authors.controller')
 
router.get('/', auth, c.findAll)
router.get('/:id', auth, paramValidation, c.findById)
router.post('/', auth,  validation,  c.insert)
router.put('/:id', auth, validation,  paramValidation, c.updateById)
router.delete('/:id', auth, paramValidation, c.removeById)
 
module.exports = router;