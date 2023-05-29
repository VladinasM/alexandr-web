const ApiError = require('../middleware/ApiError')
const bcrypt = require('bcrypt')
const jwt = require("jsonwebtoken")
const User = require('../models/User')

const generateJwt = (id, email, role) => {
    return jwt.sign(
        {id, email, role},
        'secretkey',
        {expiresIn: '24h'}
    )
}

class UserController{
    async registration(req, res, next){
        const {email, password, fullName, position} = req.body
        if(!email || !password){
            return next(ApiError.badRequest("Некорректный email или пароль"))
        }
        const candidate = await User.findOne({email})
        if(candidate){
            return next(ApiError.badRequest("Пользователь с таким email уже существует"))
        }
        let role
        if(position === 'врач' || position === 'медсестра'){
            role = 'DOCTOR'
        }else if(position === 'пациент' || !position){
            role = 'USER'
        }
        const hashPassword = await bcrypt.hash(password, 5)
        const user = await User.create({email, role, password:hashPassword, fullName, position})
        const token = generateJwt(user.id, user.email, user.role)
        return res.json({token})
    }
    async login(req, res, next){
        const {email, password} = req.body
        const user = await User.findOne({email:email})
        if(!user){
            return next(ApiError.badRequest("Пользователь с таким email не найден"))
        }
        let comparePassword = bcrypt.compareSync(password, user.password)
        if(!comparePassword){
            return next(ApiError.internal("Пароль неверный"))
        }
        const token = generateJwt(user.id, user.email, user.role)
        return res.json({token})
    }
    async check(req, res, next){
        const token = generateJwt(req.user.id, req.user.email, req.user.role)
        return res.json({token})
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