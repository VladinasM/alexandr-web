const ApiError = require('../middleware/ApiError')
const User = require('../models/User')

class UserController{
    async login(req, res, next) {
        const {email, password} = req.body
        const user = await User.findOne({email: email})
        if (!user) {
            return next(ApiError.badRequest("Пользователь с таким email не найден"))
        }
        let comparePassword = password === user.password
        if (!comparePassword) {
            return next(ApiError.internal("Пароль неверный"))
        }
        return res.json(user)
    }

    async getUserName(req, res){
        const {email} = req.params
        const userData = await User.findOne({email});

        return res.json(userData)
    }

    async delUserAcc(req, res){
        const {email} = req.body
        const deleted = await User.deleteOne({email})
        return res.json(deleted)
    }
}

module.exports = new UserController()