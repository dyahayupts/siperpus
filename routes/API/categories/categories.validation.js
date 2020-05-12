const { body, param } = require('express-validator');
const { findByName } = require('./categories.controller')


exports.validation = [
    body('name').trim().custom(value => {
      return findByName(value).then(category => {
        if(category){
          return Promise.reject('Kategori Buku Sudah Terdaftar')
        }
      })
    })   
   ]


exports.paramValidation = [
    param('id').isMongoId().withMessage('Invalid Mongo ID')
   ]
   