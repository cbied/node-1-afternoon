const express = require('express');
const getProducts = require('./getProducts');
const getProduct = require('./getProduct')

const app = express();


app.get('/api/products', getProducts)
app.get('/api/product/:id', getProduct)


app.listen(9009, (req,res) => {
    console.log('listening to port 9009')
})