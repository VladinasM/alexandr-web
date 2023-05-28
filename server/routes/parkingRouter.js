const Router = require('express')
const router = new Router()
const parkingController = require("../controllers/parkingController")

// router.post('/parking', parkingController.createParking)
router.get('/parking_director', parkingController.getDirectorSurname)
router.get('/all-places', parkingController.getAllPlaces)
router.post('/sell-place', parkingController.sellPlace)
router.post('/get-place-owner', parkingController.getPlaceOwner)
router.post('/set-place-to-free', parkingController.setPlaceToFree)

module.exports = router