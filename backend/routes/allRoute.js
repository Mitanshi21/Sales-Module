const express = require('express');
const { fetchAllProduct } = require('../controller/productController');
const { fetchAllCutomer } = require('../controller/customerController');
const { fetchAllSerial } = require('../controller/serialController');
const { fetchAllSalesMaster, insertSalesMaster } = require('../controller/salesMasterController');
const { fetchAllSalesDetails, insertSalesDetails } = require('../controller/salesDetailsController');

const route = express.Router();

route.get('/products',fetchAllProduct);

route.get('/customers',fetchAllCutomer);

route.get('/serial',fetchAllSerial);

route.get('/sales_master',fetchAllSalesMaster);
route.post('/sales_master', insertSalesMaster);

route.get('/sales_details',fetchAllSalesDetails)
route.post('/sales_details', insertSalesDetails)

module.exports = route