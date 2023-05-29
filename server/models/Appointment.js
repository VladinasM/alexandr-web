const {Schema, model} = require('mongoose')

const Appointment = new Schema({
  user: {type: Schema.Types.ObjectId, ref: 'User'},
  mobile: {type: String, require: true},
  expectedDate: {type: Date, require:true},
  fullName: {type: String, require:true},
})

module.exports = model('Appointment', Appointment)