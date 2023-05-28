

const Parking = sequelize.define('parking', {
    parkingId: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    directorSurname: {type: DataTypes.TEXT, allowNull: false}
});

const Level = sequelize.define('level', {
    levelId: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
});

const ParkingPlace = sequelize.define('parking_place', {
    placeId: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    placeCost: {type: DataTypes.INTEGER, allowNull: false},
    state: {type: DataTypes.BOOLEAN, allowNull: false},
});

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique:true, allowNull:false},
    password: {type: DataTypes.STRING, allowNull:false},
    role: {type: DataTypes.STRING, defaultValue:"USER"},
    surname: {type: DataTypes.STRING},
    name: {type: DataTypes.STRING},
    phoneNumber: {type: DataTypes.STRING}
});

const Car = sequelize.define('car', {
    carNumber: {type: DataTypes.TEXT, primaryKey: true},
    model: {type: DataTypes.TEXT},
    color: {type: DataTypes.TEXT}
});

const UserCar = sequelize.define('user_car', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement:true}
})

const BankSystem = sequelize.define('bank_system', {
    cardNumber: {type:DataTypes.INTEGER, primaryKey: true},
    validity: {type:DataTypes.TEXT},
    cvv: {type:DataTypes.INTEGER},
    money: {type:DataTypes.INTEGER},
})

Parking.hasMany(Level)
Level.belongsTo(Parking)

Level.hasMany(ParkingPlace)
ParkingPlace.belongsTo(Level)

ParkingPlace.hasMany(User)
User.belongsTo(ParkingPlace)

User.belongsToMany(Car, {through: UserCar})
Car.belongsToMany(User, {through: UserCar})

module.exports = {
    Parking,
    ParkingPlace,
    Level,
    User,
    Car,
    UserCar,
    BankSystem
}