const ApiError = require('../middleware/ApiError')


class ParkingController{
    async getAllPlaces(req, res){
        const {placeId, state} = req.params;
        let places
        if(placeId && state){
            places = await ParkingPlace.findAll({where:{placeId, state}});
        }
        if(!placeId && state){
            places = await ParkingPlace.findAll({where:{state}});
        }
        if(placeId && !state){
            places = await ParkingPlace.findAll({where:{placeId}});
        }
        if(!placeId && !state){
            places = await ParkingPlace.findAll();
        }
        return res.json(places)
    }
    async getDirectorSurname(req, res){
        const directorSurname = await Parking.findAll();
        return res.json(directorSurname);
    }
    async sellPlace(req, res){
        const {placeId} = req.body
        const place = await ParkingPlace.update({state:false},{where:{placeId:placeId}})
        res.json(place)
    }

    async getPlaceOwner(req, res){
        const {placeId} = req.body
        const data = await User.findAll({
            include:[{
                model: ParkingPlace,
                where: {placeId}
            }]
        })
        res.json(data)
    }
    async setPlaceToFree(req, res){
        const {placeId} = req.body
        const state = await ParkingPlace.update({state:true},{where:{placeId:placeId}})
        const data = await User.findAll({
            include:[{
                model: ParkingPlace,
                where: {placeId}
            }]
        }).then(data => {
            data.map(async user => await User.update({parkingPlacePlaceId:null}, {where:{id: user.dataValues.id}}))
        })
        res.json(data)
    }

}

module.exports = new ParkingController()