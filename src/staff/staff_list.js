import React, { Component } from 'react';
import KumoInputBox from '../elements/kumoInputBox';
import KumoButton from '../elements/kumoButton';

const staff = [{ staff_id: 'S-001', name: 'John', password: '12345', role: 'waiter', age: 20, address: 'Mandalay', active: 'true' }]
class Staff_list extends Component {
    render() {
        return (
            <div className="container-fluid bg-dark">
                <div className="row p-3">

                    {/* The modal */}
                    <button type="button" className="btn btn-outline-light" data-toggle="modal" data-target="#myModal">Create New Staff</button>
                    <div className="modal fade" id="myModal" role="dialog">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header"><h3>Register New Staff</h3>
                                    <button type="button" className="close" data-dismiss="modal">&times;</button>
                                </div>
                                <div className="modal-body">
                                    <label>Staff Name</label>
                                    <KumoInputBox placeholder="Name" />

                                    <label>Password</label>
                                    <KumoInputBox type="password" placeholder="Password" />

                                    <label>Confirm Password</label>
                                    <KumoInputBox type="password" placeholder="Confirm Password" />

                                    <label>Role</label>
                                    <KumoInputBox type="text" placeholder="Role" />

                                    <label>Age</label>
                                    <KumoInputBox type="text" placeholder="Age" />

                                    <label>Addrss</label>
                                    <textarea type="text" className="form-control mb-4" placeholder="Address" />

                                    <KumoButton text="Register" className="mt-4"></KumoButton>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-default" data-dismiss="modal">Cancel</button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className='bg-light p-1 m-2'>
                    <h2>Staff List</h2>
                    <div className="table-responsive">
                        <table className="table">
                            <thead className="thead-dark">
                                <tr>
                                    <th>{"Staff ID"}</th>
                                    <th>{"Staff Name"}</th>
                                    <th>{"Password"}</th>
                                    <th>{"Role"}</th>
                                    <th>{"Age"}</th>
                                    <th>{"Address"}</th>
                                    <th>{"Active"}</th>
                                </tr>

                            </thead>
                            <tbody>
                                {staff.map((v, k) =>
                                    <tr key={k}>
                                        <td>{v.staff_id}</td>
                                        <td>{v.name}</td>
                                        <td>{v.password}</td>
                                        <td>{v.role}</td>
                                        <td>{v.age}</td>
                                        <td>{v.address}</td>
                                        <td>{v.active ? "True" : "False"}</td>
                                    </tr>

                                )
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

export default Staff_list;