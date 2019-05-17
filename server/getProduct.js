const products = require('../products.json');


const getProduct = (req,res) => {
    const product = products.find(product => product.id === +req.params.id)
    if(product) {
        return res.status(200).send(product);
    } else {
        res.status(500).send('Item not in list')
    }
}

module.exports = getProduct;