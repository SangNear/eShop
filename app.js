const express = require('express')
const app = express();
const bodyParser = require('body-parser')
const morgan = require('morgan');
const { Product } = require('./models/product');
const mongoose = require('mongoose')
require('dotenv/config')
const api = process.env.API_URL


//Route
const productRouter = require('./routers/products')

app.use(`${api}/products`, productRouter)

//middleware
app.use(bodyParser.json())
app.use(morgan('tiny'))



//database
mongoose.connect(process.env.CONNECTION_STRING)
    .then(() => {
        console.log("Database Connection is ready...");
    })
    .catch((err) => {
        console.log(err);
    })


//Server
app.listen(3000, () => {
    console.log(api);
    console.log("Server is running on http://localhost:3000");
})