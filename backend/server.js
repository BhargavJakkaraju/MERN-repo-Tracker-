const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

require('dotenv').config()

const app = express()
const port = process.env.PORT || 5002

app.use(cors())
app.use(express.json())

app.use((req, res, next) => {
    console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
    console.log('Body:', req.body);
    console.log('Headers:', req.headers);
    next();
});


const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser:true})
const connection = mongoose.connection
connection.once('open', () => {
    console.log("MongoDB database connection established successfully")
})

const userRouter = require('./routes/users')
const exerciseRouter = require('./routes/exercises')

app.use('/exercises', exerciseRouter)
app.use('/users', userRouter)

app.listen(port, () => {
    console.log(`Server is running on port:${port}`)
})





