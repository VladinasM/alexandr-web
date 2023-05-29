const Appointment = require('../models/Appointment')
const User = require("../models/User");


class AppointmentController {
    async getAppointments(req, res){
        let appointments = Appointment.find({})
        return res.json(appointments)
    }
    async setAppointment(req, res){
        const {email, phoneNumber, date} = req.body
        const user = await User.findOne({email:email})
        const appointment = await Appointment.create({user, phoneNumber, date})
        res.json(appointment)
    }

    async setPlaceToFree(req, res){
        const {placeId} = req.body
        const state = await AppointmentItem.update({state:true},{where:{placeId:placeId}})
        const data = await User.findAll({
            include:[{
                model: AppointmentItem,
                where: {placeId}
            }]
        }).then(data => {
            data.map(async user => await User.update({parkingPlacePlaceId:null}, {where:{id: user.dataValues.id}}))
        })
        res.json(data)
    }

}

module.exports = new AppointmentController()