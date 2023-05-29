const {Schema, model} = require('mongoose')

const Appointment = new Schema({
  user: {type: Schema.Types.ObjectId, ref: 'User'},
  phoneNumber: {type: String, require: true},
  date: {type: Date, require:true},
  reason: {type: String, require:true}
})

module.exports = model('Appointment', Appointment)