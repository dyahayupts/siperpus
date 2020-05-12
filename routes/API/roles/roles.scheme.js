const { Schema, model } = require('../../../db.config')
const scheme = new Schema({
  name:{
     type: String,
     enum:['superadmin','admin'],
     lowercase: true,
     required: true,
  },
  name_long:{
     type: String,
     required: false,
     default:null
  },
  description: {
     type: String,
     required: false
  }
});
module.exports = model('Roles', scheme, 'roles');