const Router = require('express')
const router = new Router();
const userController = require('../controllers/userController')
const authMiddleware = require('../middleware/authMiddleware')

router.post('/registration', userController.registration)
router.post('/login', userController.login)
router.get('/auth', authMiddleware, userController.check)
router.post('/set-user-data', userController.setUserData)
router.post('/get-user-data', userController.getUserData)
router.post('/connect-user-place', userController.connectUserAndPlace)
router.post('/add-car-to-user', userController.addCarToUser)
router.post('/get-car-data', userController.getCarData)
router.post('/del-user', userController.delUserAcc)




module.exports = router;