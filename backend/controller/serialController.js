const { getAllSerial } = require("../model/serial");

const fetchAllSerial = async(req, res) =>{
    try {
        const result = await getAllSerial()
        res.status(200).json(result)
    } catch (error) {
        console.log(error);
    }
}

module.exports = {fetchAllSerial}