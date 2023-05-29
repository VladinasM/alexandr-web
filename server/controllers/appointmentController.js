const Appointment = require('../models/Appointment')
const User = require("../models/User");


class AppointmentController {
  async getAppointments(req, res) {
    let appointments = await Appointment.find({}).sort({date: -1})

    return res.json(appointments)
  }

  async getUserAppointments(req, res) {
    const {id} = req.params
    let appointments = await Appointment.find({
      'user': id
    })
    return res.json(appointments)
  }

  async setAppointment(req, res) {
    const {email, phoneNumber, date} = req.body
    const user = await User.findOne({email: email})
    const appointment = await Appointment.create({user, phoneNumber, date, email})
    res.json(appointment)
  }

  async updateAppointment(req, res) {
    const {email, patientState, description} = req.body
    const appointment = await Appointment.updateOne({email: email}, {$set: {patientState: patientState, description: description}})
    res.json(appointment)
  }

}

module.exports = new AppointmentController()