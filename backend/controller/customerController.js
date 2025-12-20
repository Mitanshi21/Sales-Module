const { getAllCustomer } = require("../model/customer");

const fetchAllCutomer = async(req, res) =>{
    try {
        const result = await getAllCustomer()
        res.status(200).json(result)
    } catch (error) {
        console.log(error);
    }
}

module.exports = {fetchAllCutomer}