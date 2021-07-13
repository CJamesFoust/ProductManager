const ProductController = require('../controllers/product.controller');
const { Product } = require('../models/product.model');

module.exports = function(app){
    app.post('/api/product', ProductController.createProduct);
}