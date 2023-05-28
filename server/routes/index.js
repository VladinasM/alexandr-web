const Router = require('express')
const router = new Router()
const userRouter = require('./userRouter')
const parkingRouter = require('./parkingRouter')
const levelRouter = require('./levelRouter')
const bankRouter = require('./bankRouter')


router.use('/user', userRouter)



module.exports = router
