const getAllProduct = require("../model/product");

const fetchAllProduct = async(req, res) =>{
    try {
      const products = await getAllProduct()
      res.status(200).json(products)  
    } catch (error) {
        console.log(error);
    }
}

module.exports = {fetchAllProduct}