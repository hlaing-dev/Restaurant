import React from 'react'
import withMedia from 'react-media-query-hoc/dist/with-media';
import { Link } from 'react-router-dom'


const Menu = () => {
    return (
        <div className="row p-3">
            <div className="col-sm-6 col-lg-3 p-3">
                <div className="card bg-light" style={{ borderTopLeftRadius: 20, borderBottomRightRadius: 20 }}>
                    <div className="card-body text-center">
                        <Link to='/food_gallery'><label>Food Gallery</label></Link>
                    </div>
                </div>
            </div>

            <div className="col-sm-6 col-lg-3 p-3">
                <div className="card bg-light" style={{ borderTopLeftRadius: 20, borderBottomRightRadius: 20 }}>
                    <div className="card-body text-center">
                        <Link to='/reservation'><label className="card-text">Reservation</label></Link>
                    </div>
                </div>
            </div>

            <div className="col-sm-6 col-lg-3 p-3">
                <div className="card bg-light" style={{ borderTopLeftRadius: 20, borderBottomRightRadius: 20 }}>
                    <div className="card-body text-center">
                        <Link to='/menu_list'><label className="card-text">Menu List</label></Link>
                    </div>
                </div>
            </div>

            <div className="col-sm-6 col-lg-3 p-3">
                <div className="card bg-light" style={{ borderTopLeftRadius: 20, borderBottomRightRadius: 20 }}>
                    <div className="card-body text-center">
                        <Link to='/order'><label className="card-text">Order</label></Link>
                    </div>
                </div>
            </div>

            <div className="col-sm-6 col-lg-3 p-3">
                <div className="card bg-light" style={{ borderTopLeftRadius: 20, borderBottomRightRadius: 20 }}>
                    <div className="card-body text-center">
                        <Link to='/add_new_item'><label className="card-text">Add New Item</label></Link>
                    </div>
                </div>
            </div>

            <div className="col-sm-6 col-lg-3 p-3">
                <div className="card bg-light" style={{ borderTopLeftRadius: 20, borderBottomRightRadius: 20 }}>
                    <div className="card-body">
                        <h4 className="card-title">History</h4>
                        <ul style={{ padding: 0 }}>
                            <li style={{ listStyle: 'none' }}><Link to='/price'><label className="card-text">Price</label></Link></li>
                            <li style={{ listStyle: 'none' }}><Link to='/old_order_list'><label className="card-text">Old Order List</label></Link></li>
                            <li style={{ listStyle: 'none' }}><Link to='/new_order_list'><label className="card-text">New Order List</label></Link> &nbsp;</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="col-sm-6 col-lg-3 p-3">
                <div className="card bg-light" style={{ borderTopLeftRadius: 20, borderBottomRightRadius: 20 }}>
                    <div className="card-body">
                        <h4 className="card-title">Staff</h4>
                        <ul style={{ padding: 0 }}>
                            <li style={{ listStyle: 'none' }}><Link to='/account_setting'><label className="card-text">Account Setting</label></Link></li>
                            <li style={{ listStyle: 'none' }}><Link to='/staff_list'><label className="card-text">Staff List</label></Link></li>    
                        </ul>
                    </div>
                </div>
            </div>

            <div className="col-sm-6 col-lg-3 p-3">
                <div className="card bg-light" style={{ borderTopLeftRadius: 20, borderBottomRightRadius: 20 }}>
                    <div className="card-body">
                        <h4 className="card-title">Promotion</h4>
                        <ul style={{ padding: 0 }}>
                            <li style={{ listStyle: 'none' }}>
                                <Link to='/this_month'><label className="card-text">This Month</label></Link>
                            </li>
                            <li style={{ listStyle: 'none' }}>
                                <Link className="menu-item" to="/coming_month" style={{ pointerEvents: 'none', hover: 'disabled' }}>
                                    Coming Month
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default withMedia(Menu);