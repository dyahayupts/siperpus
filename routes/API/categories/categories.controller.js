const Categories = require('./categories.scheme')
const { validationResult } = require('express-validator');
 
//Method FindAll
exports.findAll = (req, res, next) => {
 const q = req.query;
 const where  = {}
 if(q.name) where['name'] = q.name;
 Categories.find(where)
 .limit(req.query.limit || 0)
 .skip(req.query.skip || 0)
 .then(categories => {
    res.json(categories);
 })
 .catch(err => next(err));
}
 

//Method Find ById
exports.findById = (req, res, next) => {
   const errors = validationResult(req);
 if (!errors.isEmpty()) {
   return res.status(422).json({ errors: errors.array() });
 }

 const id = req.params.id
 Categories.findById(id)
 .then(categories => {
    res.json(categories);
 })
 .catch(err => next(err));
}


//Method Insert data category
exports.insert = (req, res, next) => {
   const errors = validationResult(req);
 if (!errors.isEmpty()) {
   return res.status(422).json({ errors: errors.array() });
 }
 const data = req.body;
 Categories.create(data)
 .then(categories => {
    res.json({
      message: `New category added!`,
      data: categories
    });
 })
 .catch(err => next(err))
}
 

//Method UpdatebyId
exports.updateById = (req, res, next) => {
   const errors = validationResult(req);
 if (!errors.isEmpty()) {
   return res.status(422).json({ errors: errors.array() });
 }

 const id = req.params.id
 const data = req.body
 Categories.findByIdAndUpdate(id, data)
 .then(categories => {
    res.json({
      message: `category ${id} updated!`,
      data: categories
    });
 })
 .catch(err => next(err))
}
 

//Method Remove ById
exports.removeById = (req, res, next) => {
   const errors = validationResult(req);
 if (!errors.isEmpty()) {
   return res.status(422).json({ errors: errors.array() });
 }

 const id = req.params.id
 Categories.findByIdAndRemove(id)
 .then(categories => {
    res.json({
      message: `category ${id} removed!`,
      data: categories
    });
 })
 .catch(err => next(err))
}

exports.findByName = (value) => {
   return Categories.findOne({$or: [{ name: value}]})
  }
