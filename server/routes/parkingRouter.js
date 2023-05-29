const Router = require('express')
const router = new Router()
const appointmentController = require("../controllers/appointmentController")

// router.post('/parking', parkingController.createParking)
router.get('/parking_director', appointmentController.getDirectorSurname)

router.post('/sell-place', appointmentController.setAppointment)
router.post('/get-place-owner', appointmentController.getPlaceOwner)
router.post('/set-place-to-free', appointmentController.setPlaceToFree)

module.exports = router