const con = require("../database/db");

const getAllProduct = async () => {
    const [rows] = await con.promise().query("SELECT *FROM PRODUCT");
    // console.log(rows);
    return rows
}

module.exports = getAllProduct