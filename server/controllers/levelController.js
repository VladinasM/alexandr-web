const ApiError = require('../middleware/ApiError')

class LevelController{

    async createLevel(req, res){
        const {id} = req.body
        let level = await Level.create({levelId: id})
        return res.json(level)
    }
    async getPlacesOnLevel(req, res){
        const {id} = req.params;
        console.log(id)
        let places = await AppointmentItem.findAll({where:{levelLevelId:id}})
        // let places = await ParkingPlace.findAll({
        //     include:[{
        //         model:Level,
        //         where: {levelId:id}
        //     }]
        // })
        return res.json(places)
    }
}

module.exports = new LevelController()