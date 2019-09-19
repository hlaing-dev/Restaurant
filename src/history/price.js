import React, { Component } from 'react';

const staff = [{ price_id: 'P001', price: '2000', product_id: 'Pr001', active: 'true' }]
class Price extends Component {
    render() {
        return (
            <div className='bg-light p-1 m-2'>
                <h3>Price</h3>
                <div className="table-responsive">
                    <table className="table">
                        <thead className="thead-dark">
                            <tr>
                                <th>{"Price ID"}</th>
                                <th>{"Price"}</th>
                                <th>{"Product ID"}</th>
                                <th>{"Active"}</th>
                                <th></th>
                            </tr>

                        </thead>
                        <tbody className="table-secondary">
                            {staff.map((v, k) =>
                                <tr key={k}>
                                    <td>{v.price_id}</td>
                                    <td>{v.price}</td>
                                    <td>{v.product_id}</td>
                                    <td>{v.active ? "True" : "False"}</td>
                                    <td><i className="fa fa-edit" /></td>
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

export default Price;