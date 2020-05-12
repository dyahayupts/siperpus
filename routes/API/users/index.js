const express = require('express');
const router = express.Router();
 
const c = require('./users.controller')

//import secret.js
const { auth } = require('../../../secret');

//object validation
const { validation, paramValidation } = require('./users.validation')
 
router.get('/', auth, c.findAll)
router.get('/:id', auth, paramValidation, c.findById)
router.post('/', auth, validation,  c.insert)
router.put('/:id', auth, paramValidation, validation, c.updateById)
router.delete('/:id', auth, paramValidation, c.removeById)
 
module.exports = router;