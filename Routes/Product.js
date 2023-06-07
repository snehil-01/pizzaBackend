const express = require('express');
const { addProduct, updateProduct, deleteProduct, getProduct, getAllProducts } = require('../Controllers/Product');
const { verifyTokenAndAdmin } = require('../Middlewares/verifyToken');
const router = express.Router();

router.post('/',verifyTokenAndAdmin,addProduct);
/* update*/ router.put('/:id',verifyTokenAndAdmin,updateProduct)
/*delete*/ router.delete('/:id',verifyTokenAndAdmin,deleteProduct)
/*GET PRODUCT*/ router.get('/find/:id',getProduct);
/* GET ALL PRODUCTS*/router.get('/',getAllProducts);

module.exports = router;