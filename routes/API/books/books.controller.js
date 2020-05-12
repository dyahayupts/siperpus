const Books = require('./books.scheme')
const { validationResult } = require('express-validator');

//Method FindAll
exports.findAll = (req, res, next) => {
 const q = req.query;
 const where  = {}
 if(q.title) where['title'] = q.title;
 Books.find(where)
 .limit(req.query.limit || 0)
 .skip(req.query.skip || 0)
 .populate('createdBy')
 .populate('updatedBy')
 .populate('author')
 .populate('category')
 .then(books => {
    res.json(books);
 })
 .catch(err => next(err));
}
 

//Method Find By Id
exports.findById = (req, res, next) => {
   const errors = validationResult(req);
 if (!errors.isEmpty()) {
   return res.status(422).json({ errors: errors.array() });
 }

 const id = req.params.id
 Books.findById(id)
 .populate('createdBy')
 .populate('updatedBy')
 .populate('author')
 .populate('category')
 .then(books => {
    res.json(books);
 })
 .catch(err => next(err));
}


//Method Insert Book
exports.insert = (req, res, next) => {
 let data = req.body;
 if (req.user) data.createdBy = req.user;
 Books.create(data)
 .then(books => {
    res.json({
      message: `New book added!`,
      data: books
    });
 })
 .catch(err => next(err))
}
 

//Method Update Books By Id
exports.updateById = (req, res, next) => {
   const errors = validationResult(req);
 if (!errors.isEmpty()) {
   return res.status(422).json({ errors: errors.array() });
 }

 const id = req.params.id
 let data = req.body
 if (req.user) data.updatedBy = req.user;
 Books.findByIdAndUpdate(id, data)
 .then(books => {
    res.json({
      message: `Book ${id} updated!`,
      data: books
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
 Books.findByIdAndRemove(id)
 .then(books => {
    res.json({
      message: `Book ${id} removed!`,
      data: books
    });
 })
 .catch(err => next(err))
}
