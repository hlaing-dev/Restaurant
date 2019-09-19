import React, { Component } from 'react';
import Crab_salad from '../image/salad/crab_salad.jpg';
import Peach_Pineapple from '../image/drink/peach_pineapple.jpg';
import Oreo from '../image/dessert/oreo.jpg';

class This_month extends Component {
    render() {
        return (
            <div className="container-fluid bg-dark p-2" style={{ textAlign: 'center' }}>
                <h5 style={{ color: '#d1d1d1' }}>
                    <i className="fa fa-bell"></i> Happy Hours <i className="fa fa-bell"></i>
                </h5>

                <h5 style={{ color: '#d1d1d1'}}>
                    <i>20%</i> off for Every Monday to Friday <b>10:00 AM to 3:00PM</b>
                </h5>
                <div className="row pb-2 d-flex justify-content-center">
                    <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-3">
                        <div className="card mt-2" style={{ textAlign: 'center', padding: 10, background: '#f9f2ec' }}>
                            <img className="img-thumbnail" src={Crab_salad} alt="Crab_Salad" />
                            <div className="card-body">
                                <label>Name: Crab Salad</label><br />
                                <label>Price: 2000</label><br />
                                <label>Type: Salad</label>
                            </div>
                            <button type="button" className="btn btn-outline-success">Order</button>
                        </div>
                    </div>

                    <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-3">
                        <div className="card mt-2" style={{ textAlign: 'center', padding: 10, background: '#f9f2ec' }}>
                            <img className="img-thumbnail" src={Peach_Pineapple} alt="Crab_Salad" />
                            <div className="card-body">
                                <label>Name: Peach Pineapple</label><br />
                                <label>Price: 2000</label><br />
                                <label>Type: Drink</label>
                            </div>
                            <button type="button" className="btn btn-outline-success">Order</button>
                        </div>
                    </div>

                    <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-3">
                        <div className="card mt-2" style={{ textAlign: 'center', padding: 10, background: '#f9f2ec' }}>
                            <img className="img-thumbnail" src={Oreo} alt="Crab_Salad" />
                            <div className="card-body">
                                <label>Name: Oreo Chocolate Candy Bar</label><br />
                                <label>Price: 2000</label><br />
                                <label>Type: Dessert</label>
                            </div>
                            <button type="button" className="btn btn-outline-success">Order</button>
                        </div>
                    </div>
                </div>

                <h5 style={{ color: '#d1d1d1'}}>
                    <i>30%</i> off for Every Weakends <b>10:00 AM to 3:00PM</b>
                </h5>
                <div className="row pb-2 d-flex justify-content-center">
                    <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-3">
                        <div className="card mt-2" style={{ textAlign: 'center', padding: 10, background: '#f9f2ec' }}>
                            <img className="img-thumbnail" src={Crab_salad} alt="Crab_Salad" />
                            <div className="card-body">
                                <label>Name: Crab Salad</label><br />
                                <label>Price: 2000</label><br />
                                <label>Type: Salad</label>
                            </div>
                            <button type="button" className="btn btn-outline-success">Order</button>
                        </div>
                    </div>

                    <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-3">
                        <div className="card mt-2" style={{ textAlign: 'center', padding: 10, background: '#f9f2ec' }}>
                            <img className="img-thumbnail" src={Peach_Pineapple} alt="Crab_Salad" />
                            <div className="card-body">
                                <label>Name: Peach Pineapple</label><br />
                                <label>Price: 2000</label><br />
                                <label>Type: Drink</label>
                            </div>
                            <button type="button" className="btn btn-outline-success">Order</button>
                        </div>
                    </div>

                    <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-3">
                        <div className="card mt-2" style={{ textAlign: 'center', padding: 10, background: '#f9f2ec' }}>
                            <img className="img-thumbnail" src={Oreo} alt="Crab_Salad" />
                            <div className="card-body">
                                <label>Name: Oreo Chocolate Candy Bar</label><br />
                                <label>Price: 2000</label><br />
                                <label>Type: Dessert</label>
                            </div>
                            <button type="button" className="btn btn-outline-success">Order</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default This_month;