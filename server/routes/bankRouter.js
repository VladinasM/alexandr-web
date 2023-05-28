const Router = require('express')
const router = new Router();
const bankController = require('../controllers/bankController')

router.post('/buy-place', bankController.buyPlaceWithCard)

module.exports = router