import React from 'react';

const items = [{ staff_name: 'John', table_number: 'T001', order_id:'O001'},
{staff_name: 'John', table_number: 'T001', order_id:'O001'}]

const Reservation = () => {
    return (
        <div className='bg-light p-1 m-2'>
            <h2>Order List</h2>
            <div className="table-responsive">
            <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th>{"ID"}</th>
                        <th>{"Staff Name"}</th>
                        <th>{"Table Number"}</th>
                        <th>{"Order ID"}</th>
                    </tr>

                </thead>
                <tbody>
                    {items.map((v, k) =>
                        <tr key={k}>
                            <td>{k + 1}</td>
                            <td>{v.staff_name}</td>
                            <td>{v.table_number}</td>
                            <td>{v.order_id}</td>
                        </tr>
                    )
                    }
                </tbody>
            </table>
            </div>
        </div>
    )
}

export default Reservation;