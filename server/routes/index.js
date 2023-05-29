const Router = require('express')
const router = new Router()
const userController = require("../controllers/userController");
const authMiddleware = require("../middleware/authMiddleware");
const appointmentController = require("../controllers/appointmentController");


router.post('/user/registration', userController.registration)
router.post('/user/login', userController.login)
router.get('/user/auth', authMiddleware, userController.check)
router.post('/user/set-user-data', userController.setUserData)
router.get('/user/get-user-data/:email', userController.getUserName)
router.post('/user/get-user-app', userController.getCarData)
router.post('/user/connect-user-place', userController.connectUserAndPlace)
router.post('/user/add-car-to-user', userController.addCarToUser)
router.post('/user/del-user', userController.delUserAcc)

router.get('/appointment-list', appointmentController.getAppointments)
router.get('/user-appointments/:id', appointmentController.getUserAppointments)
router.post('/set-appointment', appointmentController.setAppointment)


module.exports = router
