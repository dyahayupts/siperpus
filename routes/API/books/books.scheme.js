const { Schema, model } = require('../../../db.config')
const scheme = new Schema({
  title:{
     type: String,
     required: true,
  },
  quantity: {
     type: Number,
     required: true
  },
  publishedYear: {
     type: String,
     required: true,
  },
  author: [{
    type: Schema.Types.ObjectId,
    ref: 'Authors', select:true
 }],
  category: [{
     type: Schema.Types.ObjectId,
     ref: 'Categories', select:true
  }],
  createdBy: {
     type: Schema.Types.ObjectId,
     ref: 'Users', select:true
  },
  updatedBy: {
     type: Schema.Types.ObjectId,
     ref: 'Users', select:true
  },
}, {
  timestamps: true
});
module.exports = model('Books', scheme, 'books');
 
