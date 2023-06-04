const Router = require('express')
const router = new Router()
const userController = require("../controllers/userController");
const appointmentController = require("../controllers/appointmentController");


router.post('/user/login', userController.login)
router.get('/user/get-user-data/:email', userController.getUserName)
router.post('/user/del-user', userController.delUserAcc)


router.get('/appointment-list', appointmentController.getAppointments)
router.get('/user-appointments/:id', appointmentController.getUserAppointments)
router.post('/set-appointment', appointmentController.setAppointment)
router.post('/update-appointment', appointmentController.updateAppointment)
router.post('/delete-appointment', appointmentController.deleteAppointment)


module.exports = router
