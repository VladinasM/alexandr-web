const ApiError = require('../middleware/ApiError')
const User = require('../models/User')

class UserController {
  async registration(req, res, next) {
    const {email, password, role, position, fullName} = req.body
    let user
    user = await User.findOne({email: email})
    if (user) {
      return next(ApiError.badRequest("Аккаунт с таким email уже создан"))
    }
    user = await User.create({email, password, role, position, fullName})
    return res.json(user)
  }

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

  async updUserInfo(req, res) {
    const {id, email, password, role, position, fullName} = req.body
    const user = await User.findOneAndUpdate({'_id': id}, {$set: {email, password, role, position, fullName}})
    return res.json(user)
  }

  async getUserName(req, res) {
    const {email} = req.params
    const userData = await User.findOne({email});

    return res.json(userData)
  }

  async getUsers(req, res) {
    const users = await User.find({});
    return res.json(users)
  }

  async delUserAcc(req, res) {
    const {id} = req.body
    const deleted = await User.deleteOne({'_id':id})
    return res.json(deleted)
  }
}

module.exports = new UserController()