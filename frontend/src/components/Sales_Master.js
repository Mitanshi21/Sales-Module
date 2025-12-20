import { useEffect, useState } from "react"
import { allCustomer } from "../services/allApiCall"

export default function Sales_Master({ onGetData, customers }) {
    const [customer, setCustomer] = useState()

    const handleChange = (e) => {
        onGetData({ ...customers, [e.target.name]: e.target.value })
    }

    useEffect(() => {
        allCustomer().then(setCustomer)
    }, [])

    return <>
        <h1>Sales</h1><hr />
        <form className="row">
            <div className="col-4">
                <label for="date" className="form-label">Date:</label>
                <input type="date" className="form-control" name="sales_date" onChange={handleChange} value={customers?.sales_date || ''} />
            </div>

            <div className="col-4">
                <label for="doc_id" className="form-label">Doc_Id:</label>
                <input type="text" className="form-control" name="doc_id" onChange={handleChange} value={customers?.doc_id || ''} />
            </div>
            <div className="col-4">
                <label for="customer_id" className="form-label">Customer_Name:</label>
                <select className="form-control form-select" name="customer_id" onChange={handleChange} value={customers?.customer_id || ''}>
                    <option value="">--SELECT CUSTOMER--</option>
                    {customer && customer.map(c =>
                        <option value={c.customer_id}>{c.customer_name}</option>
                    )}
                </select>
            </div>
        </form>
        <hr />
    </>
}