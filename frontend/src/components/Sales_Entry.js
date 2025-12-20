import { useEffect, useState } from "react";
import { allProduct, allSerial } from "../services/allApiCall";

export default function Sales_Entry({ onClose, onHandleAdd }) {
    const [product, setProduct] = useState()
    const [serial, setSerial] = useState()

    const [product_id, setProduct_Id] = useState()
    const [product_price, setProduct_price] = useState()
    const [product_name, setProduct_name] = useState()

    const [serial_id, setSerial_id] = useState()

    const [serial_no, setSerial_no] = useState()
    const [expiry_date, setExpiry_date] = useState()

    const [filterSerial, setFilterSerial] = useState()

    const [message, setMessage] = useState('')

    useEffect(() => {
        allProduct().then(setProduct)
    }, [])

    useEffect(() => {
        allSerial().then(setSerial)
    }, [product_id])

    const productChange = (product_id) => {
        const filter = serial.filter(s => s.PRODUCT_ID == product_id)
        setFilterSerial(filter)

        const filterProduct = product.find(p => p.product_id == product_id)
        if (filterProduct) {
            setProduct_price(filterProduct.product_price)
            setProduct_name(filterProduct.product_name)
        }
    }

    const onChangeSerialId = (serial_id) => {
        const getSerial = serial.find(s => s.SERIAL_ID == serial_id)
        if (getSerial) {
            setExpiry_date(getSerial.EXPIRY_DATE.substring(10, 0))
            setSerial_no(getSerial.SERIAL_NO)
            setSerial_id(serial_id)
        }
        // console.log(getSerial.EXPIRY_DATE);

    }

    const handleAdd = (e) => {
        e.preventDefault()

        if (product_id && product_name && product_price && serial_id && serial_no && expiry_date) {
            onHandleAdd({ product_id, product_name, product_price, serial_id, serial_no, expiry_date })
            setProduct_Id(0)
            setProduct_name('')
            setProduct_price(0)
            setSerial_id('')
            setSerial_no('')
            setExpiry_date('')
            onClose()
        }
        else
            setMessage("Select All Filed!!")

        // onClose()
    }

    return (
        <div style={modalOverlayStyle}>
            <div className="card" style={{ width: '50%', zIndex: 1001 }}>
                <div class="card-header d-flex justify-content-between align-items-center">
                    Add Item
                    <button className="btn-close" onClick={onClose}></button>
                </div>
                <div class="card-body">
                    <form className="form">
                        <label for="product_id" className="form-label">Product_Name:</label>
                        <select className="form-control form-select" name="product_id"
                            onChange={
                                (e) => {
                                    // await allSerial().then(setSerial)
                                    setProduct_Id(e.target.value)
                                    productChange(e.target.value)
                                }
                            }>
                            <option value="">--SELECT Product--</option>
                            {product && product.map(p =>
                                <option value={p.product_id}>
                                    {p.product_name}
                                </option>)}
                        </select>

                        <label for="sales_price" className="form-label">Product Price:</label>
                        <input type="text" className="form-control" name="sales_price" disabled value={product_price || 0} />

                        <label for="Qty" className="form-label">Qty:</label>
                        <input type="number" className="form-control" name="qty" value={1} disabled />

                        <label for="serial_id" className="form-label">Serial_No:</label>
                        <select className="form-control form-select" name="serial_id" onChange={
                            (e) => {
                                setSerial_id(e.target.value)
                                onChangeSerialId(e.target.value)
                            }
                        }>
                            <option value="">--SELECT SERIAL_NO--</option>
                            {filterSerial && filterSerial.map(s =>
                                <option value={s.SERIAL_ID}>{s.SERIAL_NO}</option>
                            )}
                        </select>

                        <label for="expiry_date" className="form-label">Expiry_Date:</label>
                        <input type="text" className="form-control" name="expiry_date" disabled value={expiry_date || '-'} />

                        {
                            message &&
                            <p className="alert alert-danger mt-3">{message}</p>
                        }
                        <div className="mt-3 text-end">
                            <button type="button" className="btn btn-secondary btn-sm me-2" onClick={onClose}>Cancel</button>
                            <button type="submit" className="btn btn-primary btn-sm" onClick={handleAdd}>Add Item</button>
                        </div>
                    </form>
                </div>
            </div>
            <div style={backdropStyle} onClick={onClose}></div>

        </div>
    )
}
const modalOverlayStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000
};

const backdropStyle = {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.5)'
};