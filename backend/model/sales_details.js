const con = require("../database/db");

const getAllSalesDetails = async () => {
    const [rows] = await con.promise().query("SELECT SD.SALES_DETAILS_ID, SD.SALES_MASTER_ID, SD.PRODUCT_ID, SD.SERIAL_ID, P.PRODUCT_NAME, P.PRODUCT_PRICE, S.SERIAL_ID, S.SERIAL_NO, S.EXPIRY_DATE, SM.SALES_DATE, SM.DOC_ID, SM.AMOUNT, C.CUSTOMER_NAME FROM SALES_DETAILS AS SD, PRODUCT AS P, SERIAL AS S, SALES_MASTER AS SM, CUSTOMER AS C WHERE SD.SALES_MASTER_ID = SM.SALES_MASTER_ID AND SD.PRODUCT_ID=P.PRODUCT_ID AND SD.SERIAL_ID=S.SERIAL_ID AND SM.CUSTOMER_ID = C.CUSTOMER_ID");
    // console.log(rows);

    return rows
}
const sendSalesDetails = async (sales_details) => {
    // console.log(sales_details);

    const values = sales_details.map(item => [
        item.sales_master_id,
        item.product_id,
        item.serial_id,
    ])

    const [rows] = await con.promise().query("INSERT INTO SALES_DETAILS(sales_master_id, product_id, serial_id) VALUES ?", [values])
    return rows
}
module.exports = { getAllSalesDetails, sendSalesDetails }