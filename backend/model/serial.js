const con = require("../database/db")

const getAllSerial = async () => {
    const [rows] = await con.promise().query("SELECT S.SERIAL_ID, S.SERIAL_NO,S.EXPIRY_DATE ,S.PRODUCT_ID, P.PRODUCT_NAME, P.PRODUCT_PRICE FROM SERIAL AS S, PRODUCT AS P WHERE S.PRODUCT_ID=P.PRODUCT_ID")
    return rows
}

module.exports = { getAllSerial }