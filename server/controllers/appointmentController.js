const Appointment = require('../models/Appointment')
const User = require("../models/User");
const mongoose = require('mongoose');



class AppointmentController {
  async getAppointments(req, res) {
    let appointments = await Appointment.find({}).sort({date: -1})

    return res.json(appointments)
  }

  async getUserAppointments(req, res) {
    const {id} = req.params
    let appointments = await Appointment.find({
      'user': id.toString()
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
    const {id, patientState, description} = req.body
    const appointment = await Appointment.findOneAndUpdate({'_id': id}, {$set: {patientState: patientState, description: description}})
    const list = await Appointment.find({}).sort({date: -1})
    res.json(list)
  }
  async deleteAppointment(req, res) {
      const {id} = req.body
      const deleted = await Appointment.findOneAndDelete({'_id': id})
      res.json(deleted)
    }

}

module.exports = new AppointmentController()