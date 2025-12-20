const {getAllSalesMaster, sendSalesMaster} = require("../model/sales_master");


const fetchAllSalesMaster = async (req, res) =>{
    try {
        const result = await getAllSalesMaster()
        res.status(200).json(result)
    } catch (error) {
        console.log(error);
    }
}

const insertSalesMaster = async (req, res) =>{
    try {
        const result = await sendSalesMaster(req.body)
        res.status(200).json(result)
    } catch (error) {
        console.log(error);
    }
}

module.exports = {fetchAllSalesMaster, insertSalesMaster}