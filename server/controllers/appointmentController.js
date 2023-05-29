const Appointment = require('../models/Appointment')
const User = require("../models/User");


class AppointmentController {
    async getAppointments(req, res){
        let appointments = await Appointment.find({})

        return res.json(appointments)
    }
    async getUserAppointments(req, res){
        const {id} = req.params
        let appointments = await Appointment.find({
            'user': id
        })
        console.log(appointments)
        return res.json(appointments)
    }
    async setAppointment(req, res){
        const {email, phoneNumber, date} = req.body
        const user = await User.findOne({email:email})
        const appointment = await Appointment.create({user, phoneNumber, date})
        res.json(appointment)
    }

}

module.exports = new AppointmentController()