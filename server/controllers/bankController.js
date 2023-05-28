const ApiError = require('../middleware/ApiError')

class BankController {
    async buyPlaceWithCard(req, res, next){
        const {cardNumber, validity, cvv, price} = req.body
        if(!cardNumber || !validity || !cvv){
            return next(ApiError.badRequest("Вы должны заполнить все поля"))
        }
        const card = await BankSystem.findOne({where:{cardNumber, validity, cvv}})
        if(!card){
            return next(ApiError.badRequest("Карта не найдена проверьте данные"))
        }
        if(card.money > price){
            let finalMoney = Number(card.money) - Number(price)
            const buyPlace = await BankSystem.update({money: finalMoney}, {where: {cardNumber}})
        }else if (card.money < price){
            return next(ApiError.badRequest("На счёте недостаточно средств"))
        }
        return res.json(card)

    }
}

module.exports = new BankController()