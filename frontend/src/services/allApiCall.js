import axios from 'axios'
const url = "http://localhost:5000/api"
export const allProduct = async () => {
    const res = await axios.get(`${url}/products`)
    return res.data
}
export const allSerial = async () => {
    const res = await axios.get(`${url}/serial`)
    // console.log(res.data);

    return res.data
}
export const allCustomer = async () => {
    const res = await axios.get(`${url}/customers`)
    return res.data
}
export const allSalesMaster = async () => {
    const res = await axios.get(`${url}/sales_master`)
    return res.data
}
export const allSalesDetails = async () => {
    const res = await axios.get(`${url}/sales_details`)
    return res.data
}

export const sendSalesMaster = async (master_data) => {
    const res = await axios.post(`${url}/sales_master`, master_data)
    return res.data
}

export const sendSalesDetails = async (details_data) => {
    const res = await axios.post(`${url}/sales_details`, details_data)
    return res.data
}