import { useEffect, useState } from 'react';
import { allProduct, allSalesDetails, allSalesMaster, allSerial, sendSalesDetails, sendSalesMaster } from './services/allApiCall';
import Sales_Master from './components/Sales_Master';
import Sales_Entry_Table from './components/Sales_Entry_Table';


function App() {
  const [data, setData] = useState({ tableRow: [], tot: 0 })
  const [customer, setCustomer] = useState({ customer_id: '', sales_date: '', doc_id: '' })
  const [res, setRes] = useState(null)
  const [detailsRes, setDetailsRes] = useState(null)


  const resetFun = () => {
    setData({ tableRow: [], tot: 0 })
    setCustomer({ customer_id: '', sales_date: '', doc_id: '' })
    setRes(null)
    setDetailsRes(null)
  }

  const handleSubmit = () => {
    if (!customer.sales_date && !customer.doc_id && !customer.customer_id && !data.tot) {
      alert("All Fields are Required!!")
    } else {
      // console.log([{ customer_id: customer.customer_id, sales_date: customer.sales_date, doc_id: customer.doc_id, amount: data.tot }]);
      sendSalesMaster({ customer_id: customer.customer_id, sales_date: customer.sales_date, doc_id: customer.doc_id, amount: data.tot }).then(setRes)
    }
  }

  useEffect(() => {
    if (!res?.insertId) return

    const arrData = data.tableRow?.map(item => ({
      sales_master_id: res.insertId,
      product_id: item.product_id,
      serial_id: item.serial_id
    }))
    if (arrData) {
      sendSalesDetails(arrData).then(respose => {
        alert("Successfully Recorded!!")
        setDetailsRes(respose)
      })
    }
  }, [res])

  useEffect(() => {
    if (detailsRes) {
      resetFun()
    }
  }, [detailsRes])

  return (
    <div className='container mt-5'>
      <Sales_Master onGetData={setCustomer} customers={customer} />
      <Sales_Entry_Table onGetData={setData} data={data} />
      {data.tableRow?.length !== 0 &&
        <div className="mt-3 text-end">
          <button type="button" className="btn btn-secondary btn-sm me-2" onClick={resetFun}>Cancel</button>
          <button type="submit" className="btn btn-primary btn-sm" onClick={handleSubmit}>Submit</button>
        </div>
      }
    </div>
  );
}

export default App;
