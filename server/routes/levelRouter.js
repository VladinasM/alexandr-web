const Router = require('express')
const router = new Router()
const levelController = require("../controllers/levelController")

router.post('/', levelController.createLevel)
router.get('/:id', levelController.getPlacesOnLevel)


module.exports = router