const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const con = require('./database/db')
const getAllProduct = require('./model/product')
const route  = require('./routes/allRoute')
const app = express()

dotenv.config()
// con
app.use(express.json())
app.use(cors())

app.use('/api',route)

app.listen(process.env.PORT,()=>{
    console.log(`Server running on ${process.env.PORT}`);
    console.log(`Follow the link: http://localhost:${process.env.PORT}`);
    
})