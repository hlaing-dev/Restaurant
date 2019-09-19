import React, { Component } from 'react';

const order = [
    { orderId: 'O-001', table_name: 'A1', product_name: 'Oreo Chocolate Candy Bar', type: 'Dessert', price: 2000, quantity: 2, total: 4000, date: '27.8.2019' },
    { orderId: 'O-001', table_name: 'A1', product_name: 'Oreo Chocolate Candy Bar', type: 'Dessert', price: 2000, quantity: 2, total: 4000, date: '27.8.2019' }
]

class Old_order_list extends Component {
    render() {
        return (
            <div className='bg-light p-1 m-2'>
                <h3>New Order List</h3>
                <div className="table-responsive">
                    <table className="table">
                        <thead className="thead-dark">
                            <tr>
                                <th>{"Table Name"}</th>
                                <th>{"Product Name"}</th>
                                <th>{"Type"}</th>
                                <th>{"Price"}</th>
                                <th>{"Quantity"}</th>
                                <th>{"Total"}</th>
                                <th>{"Date"}</th>
                                <th></th>
                            </tr>

                        </thead>
                        <tbody className="table-secondary">
                            {order.map((v, k) =>

                                <tr key={k}>
                                    <td>{v.table_name}</td>
                                    <td>{v.product_name}</td>
                                    <td>{v.type}</td>
                                    <td>{v.price}</td>
                                    <td>{v.quantity}</td>
                                    <td>{v.total}</td>
                                    <td>{v.date}</td>
                                    <td><i className="fa fa-trash" /></td>
                                </tr>
                            )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default Old_order_list;