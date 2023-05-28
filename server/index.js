const express = require('express')
const cors = require('cors')
const router = require('./routes/index')
const mongoose = require('mongoose')

const PORT = 5000;
const URL = 'mongodb://localhost/dental'

const app = express();
app.use(cors())
app.use(express.json())
app.use('/api', router)


const start = async () => {
    try {
        await mongoose.connect(URL, {family:4})
        console.log('Бд подключилась')
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`) )
        console.log('Сервер заработал')
    }catch (e){
        console.log(e)
    }
}
start()