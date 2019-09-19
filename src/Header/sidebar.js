import React, { Component } from 'react'
import { pushRotate as Menu } from 'react-burger-menu'
import './style.css'
import { Link } from 'react-router-dom'

class Sidebar extends Component {
  render() {
    return (
      <Menu disableAutoFocus >
        <div className='w-100 text-center mb-4' >
          <span>
            <i className="fa fa-user fa-2x" />
          </span>
          <h3>KUMO Restaurant</h3>
        </div>

        <Link className="menu-item" to="/dashboard">
          <i className="fa fa-clipboard pr-4" />
          Dashboard
        </Link>

        <Link className="menu-item" to="/reservation">
          <i className="fa fa-check-square pr-4" />
          Reservation
        </Link>

        <Link className="menu-item" to="/food_gallery">
          <i className="fa fa-cutlery pr-4" />
          Food Gallery
        </Link>

        <Link className="menu-item" to="/category_list">
          <i className="fa fa-list pr-4" />
          Category List
        </Link>

        <Link className="menu-item" to="/table_list">
          <i className="fa fa-table pr-4" />
          Table List
        </Link>

        <Link className="menu-item" to="/order">
          <i className="fa fa-shopping-basket pr-4" />
          Order
        </Link>

        <Link className="menu-item" to="/add_new_item">
          <i className="fa fa-plus pr-4" />
          Add New Item
        </Link>

        <Link className="menu-item" to="/add_new_price">
          <i className="fa fa-plus pr-4" />
          Add Price
        </Link>

        <Link className="menu-item" to="/history">
          <i className="fa fa-history pr-4" />
          History
        </Link>

        <label><i className="fa fa-user pr-4" />Staff</label>
        <ul >
          <li style={{ listStyle: 'none' }}>
            <Link className="menu-item" to="/staff_list" style={{ color: '#d1d1d1' }}>
              <i className="fa fa-users pr-4" style={{ color: '#d1d1d1' }} />
              Staff List
            </Link>
          </li>

          <li style={{ listStyle: 'none' }}>
            <Link className="menu-item" to="/account_setting" style={{ color: '#d1d1d1' }}>
              <i className="fa fa-user pr-4" style={{ color: '#d1d1d1' }} />
              Account Setting
            </Link>
          </li>
        </ul>

        <label><i className="fa fa-bullhorn pr-4" />Promotion</label>
        <ul>
          <li style={{ listStyle: 'none' }}>
            <Link className="menu-item" to="/promotion" style={{ color: '#d1d1d1' }}>
              <i className="fa fa-calendar-o pr-4" style={{ color: '#d1d1d1' }} />
              Create Promotion
          </Link>
          </li>

          <li style={{ listStyle: 'none' }}>
            <Link className="menu-item" to="/this_month" style={{ color: '#d1d1d1' }}>
              <i className="fa fa-calendar-o pr-4" style={{ color: '#d1d1d1' }} />
              This Month
          </Link>
          </li>

          <li className="" style={{ listStyle: 'none' }}>
            <Link className="menu-item" to="/coming_month" style={{ color: '#d1d1d1', pointerEvents: 'none', hover: 'disabled' }}>
              <i className="fa fa-calendar pr-4" style={{ color: '#d1d1d1' }} />
              Coming Month
           </Link>
          </li>
        </ul>
      </Menu>

    )
  }
}

export default Sidebar