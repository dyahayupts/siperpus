const Roles = require('./roles.scheme')
const { validationResult } = require('express-validator');
   
//    Method find all sudah diperbarui
exports.findAll = (req, res, next) => {
    const q = req.query;
    const where  = {}
    if(q.name) where['name'] = q.name;
    if(q.name_long) where['name_long'] = q.name_long;
    
    Roles.find(where)
    .limit(req.query.limit || 0)
    .skip(req.query.skip || 0)
    .then(roles => {
       res.json(roles);
    })
    .catch(err => next(err));
   }
   


//    Method find byId sudah diperbarui
exports.findById = (req, res, next) => {
   const errors = validationResult(req);
 if (!errors.isEmpty()) {
   return res.status(422).json({ errors: errors.array() });
 }

    const id = req.params.id
    Roles.findById(id)
    .then(roles => {
       res.json(roles);
    })
    .catch(err => next(err));
   }
      


//    Method insert sudah diperbarui
exports.insert = (req, res, next) => {
    const data = req.body;
    Roles.create(data)
    .then(roles => {
       res.json({
         message: `New role added!`,
         data: roles
       });
    })
    .catch(err => next(err))
   }
   
   

//    Method Update By Id sudah diperbarui
exports.updateById = (req, res, next) => {
   const errors = validationResult(req);
 if (!errors.isEmpty()) {
   return res.status(422).json({ errors: errors.array() });
 }

    const id = req.params.id
    const data = req.body
    Roles.findByIdAndUpdate(id, data)
    .then(roles => {
       res.json({
         message: `Role ${id} updated!`,
         data: roles
       });
    })
    .catch(err => next(err))
   }
   


// Method Delete By Id
exports.removeById = (req, res, next) => {
   const errors = validationResult(req);
 if (!errors.isEmpty()) {
   return res.status(422).json({ errors: errors.array() });
 }

    const id = req.params.id
    Roles.findByIdAndRemove(id)
    .then(roles => {
       res.json({
         message: `Role ${id} removed!`,
         data: roles
       });
    })
    .catch(err => next(err))
   }
   
   //fungsi baru untuk cek apakah id role ada
   exports.cekRolesId = (id) => {
      return Roles.findById(id)
     }
     
   
   