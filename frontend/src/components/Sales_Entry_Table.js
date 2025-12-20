import { use, useEffect, useState } from "react"
import Sales_Entry from "./Sales_Entry"
import { tab } from "@testing-library/user-event/dist/tab"

export default function Sales_Entry_Table({ onGetData, data }) {
    const [showPopUp, setShowPopUp] = useState(false)
    const [tableRow, setTableRow] = useState([])
    const [total, setTotal] = useState(0)

    useEffect(() => {
        if (!data || !data.tableRow || data.tableRow.length === 0) {
            setTableRow([])
            setTotal(0)
        }
    }, [data])
    useEffect(() => {
        if (tableRow && tableRow.length > 0) {
            const tot = tableRow.reduce((acc, currentIten) => acc + currentIten.product_price, 0)
            setTotal(tot)
            onGetData({ tableRow, tot })
        }
    }, [tableRow])

    return <div className="container mt-5">
        <div className="text-end">
            <button className="btn btn-primary btn-sm" onClick={() => setShowPopUp(true)}>+ Add Row</button>
        </div>
        {showPopUp && (
            <Sales_Entry onClose={() => setShowPopUp(false)} onHandleAdd={(newRow) => {
                setTableRow(prev => [...prev, newRow])
            }
            } />
        )}
        <div>
            <table className="table table-responsive">
                <thead>
                    <tr>
                        <th>Sr.</th>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Qty</th>
                        <th>Serial_No</th>
                        <th>Expiry_Date</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {tableRow && tableRow.map((r, index) => {
                        return <tr>
                            <td>{index + 1}</td>
                            <td>{r.product_name}</td>
                            <td>{r.product_price}</td>
                            <td>{1}</td>
                            <td>{r.serial_no}</td>
                            <td>{r.expiry_date}</td>
                            <td>{r.product_price}</td>
                        </tr>
                    })}
                    {
                        total > 0 &&
                        <tr>
                            <td colSpan={7} className="text-end">{"Total Amount: " + total}</td>
                        </tr>
                    }

                </tbody>
            </table>
        </div>
        <div>

        </div>
    </div>
}