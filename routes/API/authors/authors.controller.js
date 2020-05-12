const Authors = require('./authors.scheme')
const { validationResult } = require('express-validator');
 
//Method FindAll
exports.findAll = (req, res, next) => {
 const q = req.query;
 const where  = {}
 if(q.name) where['name'] = q.name;
 Authors.find(where)
 .limit(req.query.limit || 0)
 .skip(req.query.skip || 0)
 .then(authors => {
    res.json(authors);
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
 Authors.findById(id)
 .then(authors => {
    res.json(authors);
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
 Authors.create(data)
 .then(authors => {
    res.json({
      message: `New author added!`,
      data: authors
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
 Authors.findByIdAndUpdate(id, data)
 .then(authors => {
    res.json({
      message: `author ${id} updated!`,
      data: authors
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
 Authors.findByIdAndRemove(id)
 .then(authors => {
    res.json({
      message: `Author ${id} removed!`,
      data: authors
    });
 })
 .catch(err => next(err))
}

exports.findByName = (value) => {
   return Authors.findOne({$or: [{ name: value}]})
  }
  
