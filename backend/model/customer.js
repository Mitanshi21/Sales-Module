const con = require("../database/db")

const getAllCustomer = async () =>{
    const [rows] = await con.promise().query("SELECT *FROM CUSTOMER")
    return rows
}

module.exports = {getAllCustomer}