const express = require('express')
const productRouter = express.Router()
const productController = require('../controllers/c_product')

const multiUpload = require ('../helpers/uploadImg')

//get by id
productRouter.get('/:id', productController.getById )

const checkToken = require('../helpers/checkToken')
//add New Product
productRouter.post("/add-product",checkToken.isLogin, checkToken.isSeller, multiUpload, productController.addNew)
//add from Existing Product
productRouter.post("/add-stock",checkToken.isLogin,checkToken.isSeller, productController.addExisting) 
//updateProd
productRouter.patch("/updateProd/:id",checkToken.isSeller,multiUpload, productController.updateProd)
//update pivot
productRouter.patch("/update/:id",checkToken.isSeller, productController.updateProduct)
//deleteProd
productRouter.delete("/deleteProd/:id", checkToken.isSeller, productController.deleteProd)
//delete Pivot
productRouter.delete("/delete/:id",checkToken.isSeller, productController.deleteProduct)

productRouter.get("/getId/:id",checkToken.isSeller, productController.getId)

productRouter.get("/getPivotId/:id",checkToken.isSeller,productController.getPivotId)

//getColor&Size in detailProduct
productRouter.get("/get_size/:id", productController.getSize)
productRouter.get("/get_color/:id", productController.getColor)

module.exports = productRouter