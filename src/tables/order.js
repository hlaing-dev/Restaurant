import React from 'react';
import KumoButton from '../elements/kumoButton';
import KumoInputBox from '../elements/kumoInputBox';
import Oreo from '../image/dessert/oreo.jpg';

const order = [
    { orderId: 'O-001', table_name: 'A1', item_name: 'Oreo Chocolate Candy Bar', price: 2000 },
    { orderId: 'O-001', table_name: 'A1', item_name: 'Oreo Chocolate Candy Bar', price: 2000 }
]

const OrderTable = () => {
    return (
        <div className="container-fluid bg-dark">
            <div className="row p-3">

                {/* The modal */}
                <button type="button" className="btn btn-outline-light" data-toggle="modal" data-target="#myModal">Order Form</button>
                <div className="modal fade" id="myModal" role="dialog">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header"><h3>Order Form</h3>
                                <button type="button" className="close" data-dismiss="modal">&times;</button>
                            </div>
                            <div className="modal-body">
                                <label>Table No</label>
                                <KumoInputBox />

                                <label>Date</label>
                                <KumoInputBox />

                                <label>Phone Number</label>
                                <KumoInputBox />

                                <label>Delivery Method</label><br />
                                <input type="checkbox" id="defaultCheck" />
                                <label>For Pick Up</label>&nbsp;&nbsp;
                                <input type="checkbox" id="defaultCheck" />
                                <label>For Delivery</label>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="table-responsive" style={{ borderTopLeftRadius: 20 }}>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>{"Image"}</th>
                            <th>{"Product Name"}</th>
                            <th>{"Type"}</th>
                            <th>{"Price"}</th>
                            <th>{"Quantity"}</th>
                            <th>{"Subtotal"}</th>
                            <th></th>
                        </tr>

                    </thead>
                    <tbody className="table-secondary">
                        {order.map((v, k) =>

                            <tr key={k}>
                                {/* <td><img src={process.env.PUBLIC_URL + '../image/dessert/' + v.image} alt="product" /></td> */}
                                {/* <td><img src={v.image} alt="Product"/></td> */}
                                <td><img src={Oreo} alt="product" style={{ width: 150, height: 150 }} /></td>
                                <td>{v.tableName}</td>
                                <td>{v.itemName}</td>
                                <td>{v.price}</td>
                                <td><KumoInputBox type="number" style={{ width: 90 }} /></td>
                                <td>{v.price}</td>
                                <td><i className="fa fa-trash" /></td>
                            </tr>
                        )
                        }
                        <tr style={{ textAlign: 'center' }}>
                            <td colSpan="4">Total</td>
                            <td colSpan="3">4000</td>
                        </tr>

                        <tr>
                            <td colSpan="7">
                                <KumoButton text="Order" className="btn btn-outline-secondary" />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>
    )
}
export default OrderTable;