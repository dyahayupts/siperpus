const express = require('express');
const { auth } = require('../../../secret');

const { validation, paramValidation } = require('./categories.validation')

const router = express.Router();
 
const c = require('./categories.controller')
 
router.get('/', auth, c.findAll)
router.get('/:id', auth, paramValidation, c.findById)
router.post('/', auth,  validation, c.insert)
router.put('/:id', auth, validation, paramValidation, c.updateById)
router.delete('/:id', auth, paramValidation, c.removeById)
 
module.exports = router;