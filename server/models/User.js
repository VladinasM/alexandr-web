const {Schema, model} = require('mongoose')

const User = new Schema({
  email: {type: String, unique:true, require: true},
  password: {type: String, require: true},
  role: {type: String, require:true, default: 'пациент'},
  fullName: {type: String, require:true},
  position: {type: String}
})

module.exports = model('User', User)