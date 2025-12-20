const con = require("../database/db");

const getAllSalesMaster = async () => {
    const [rows] = await con.promise().query("SELECT SM.SALES_MASTER_ID, SM.SALES_DATE, SM.DOC_ID, SM.AMOUNT, SM.CUSTOMER_ID, C.CUSTOMER_NAME FROM SALES_MASTER AS SM, CUSTOMER AS C WHERE SM.CUSTOMER_ID = C.CUSTOMER_ID");
    console.log(rows);

    return rows
}
const sendSalesMaster = async (sales_master) => {
    // console.log(sales_master);

    const { customer_id, sales_date, doc_id, amount } = sales_master

    const [rows] = await con.promise().query("INSERT INTO SALES_MASTER(customer_id, sales_date, doc_id, amount) VALUES (?,?,?,?)", [customer_id, sales_date, doc_id, amount])
    return rows
}
module.exports = { getAllSalesMaster, sendSalesMaster }