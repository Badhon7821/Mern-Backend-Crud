const mongoose = require('mongoose')
const { Schema } = mongoose;

const modelSchema = new Schema({
  title:  String, 
  author: String,
  body:   String
});

module.exports = mongoose.model('Crud', modelSchema);