const { body, param } = require('express-validator');


exports.paramValidation = [
    param('id').isMongoId().withMessage('Invalid Mongo ID')
   ]
   