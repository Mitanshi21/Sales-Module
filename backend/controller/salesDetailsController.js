const {getAllSalesDetails, sendSalesDetails} = require("../model/sales_details");

const fetchAllSalesDetails = async (req, res) =>{
    try {
        const result = await getAllSalesDetails()
        res.status(200).json(result)
    } catch (error) {
        console.log(error);
    }
}

const insertSalesDetails = async (req, res) =>{
    try {
        const result = await sendSalesDetails(req.body)
        res.status(200).json(result)
    } catch (error) {
        console.log(error);
    }
}

module.exports = {fetchAllSalesDetails, insertSalesDetails}