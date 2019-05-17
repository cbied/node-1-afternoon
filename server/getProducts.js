const products = require('../products.json');



const getProducts = (req,res) => {
    res.status(200).send(products)
}

const filterProducts = (req,res) => {
    if(req.query.price) {
        const items = products.filter(items => items.price <= req.params.price) 
        if(items) {
            res.status(200).send(items)
        } else {
            res.send(products)
        }
    }
}



module.exports = getProducts;