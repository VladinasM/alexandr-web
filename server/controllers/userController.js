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
    async setUserData(req, res, next){
        const {phoneNumber, surname, name, id} = req.body
        if(!phoneNumber || !surname || !name){
            return next(ApiError.badRequest("Введены не все данные"))
        }
        const user = await User.update({phoneNumber: phoneNumber, surname: surname, name: name}, {where: {id:id}})
        const userData = await User.findOne({where:{id}})

        return res.json({phoneNumber: userData.phoneNumber, surname: userData.surname, name: userData.name})
    }
    async getUserData(req, res, next){
        const {id} = req.body
        const userData = await User.findOne({where:{id}});
        // return res.json({phoneNumber: userData.phoneNumber, surname: userData.surname, name: userData.name, parkingPlace: userData.parkingPlacePlaceId})
        return res.json(userData)
    }
    async connectUserAndPlace(req, res) {
        const {userId, parkingPlacePlaceId} = req.body
        const update = await User.update({parkingPlacePlaceId:parkingPlacePlaceId}, {where:{id:userId}})
        return res.json(userId)
    }
    async addCarToUser(req, res) {
        const {userId, carNumber, model, color} = req.body
        const findCar = await Car.findOne({where: {carNumber}})
        let userCar;
        if(findCar){
            userCar = await UserCar.create({userId, carCarNumber: carNumber})
        }
        else{
            const car = await Car.create({carNumber, model, color})
            userCar = await UserCar.create({userId, carCarNumber: carNumber})
        }

        return res.json(userCar)
    }
    async getCarData(req, res){
        const {id} = req.body
        const carData = await User.findAll({
            where: {id},
            include:[{
                model: Car,
            }]
        })
        return res.json(carData)
    }
    async delUserAcc(req, res){
        const {id} = req.body
        const placeId = await User.findOne({where:{id}}).then(data => data.parkingPlacePlaceId)
        let data
        if(placeId){
            data = await User.findAll({
                include:[{
                    model:ParkingPlace,
                    where:{placeId}
                }]
            })
            if(data.length === 1){
                const state = await ParkingPlace.update({state:true}, {where:{placeId}})
            }
        }
        const user = await User.destroy({where:{id}})
        return res.json(placeId)
    }
}

module.exports = new UserController()