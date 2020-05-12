const { body, param } = require('express-validator');
const { findByName } = require('./authors.controller')


exports.validation = [
    body('name').trim().custom(value => {
      return findByName(value).then(author => {
        if(author){
          return Promise.reject('Penulis Sudah Terdaftar')
        }
      })
    })   
   ]
   

exports.paramValidation = [
    param('id').isMongoId().withMessage('Invalid Mongo ID')
   ]
   