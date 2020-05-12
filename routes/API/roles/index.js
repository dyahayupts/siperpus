const express = require('express');
const router = express.Router();

const { paramValidation } = require('./roles.validation')

const c = require('./roles.controller')

const { auth } = require('../../../secret');
 
router.get('/', auth, c.findAll)
router.get('/:id', auth, paramValidation, c.findById)
router.post('/',  auth, c.insert)
router.put('/:id', auth, paramValidation, c.updateById)
router.delete('/:id', auth, paramValidation, c.removeById)
 
module.exports = router;