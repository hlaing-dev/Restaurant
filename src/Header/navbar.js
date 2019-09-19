import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = (props) => {
  const { userName, role, NotiAmount } = props

  //Notification
  const notification = () => {
    alert("Notification")
  }

  return (
    <div className="navbar navbar-expand-lg justify-content-between pl-5"
      style={{ background: 'linear-gradient(to left, #02AAB0 0%, #00CDAC 100%)', position: 'relative', color: '#ffffff' }}>
      <Link to="/home" className="navbar-brand ml-4 text-light" >
        KUMO Restaurant
      </Link>
      <ul className="nav justify-content-end d-flex align-items-center">
        <li className="nav-item" style={{ paddingRight: 20 }}>
          <i className="fa fa-bell" onClick={notification}></i>
          <span className="badge badge-notify" style={{ position: 'relative', top: -10, left: -1 }}>{NotiAmount}</span>
        </li>

        <li className="nav-item">
          <i className="fa fa-user-circle nav-link" data-toggle="dropdown"></i>
          <div className="dropdown-menu dropdown-menu-right" style={{ width: '10%', position: 'absolute', zIndex: 2 }}>
            <h2 className="dropdown-header" style={{ textDecoration: 'underline' }}><b>User Information</b></h2>
            <label className="dropdown-item">Name:{userName}</label>
            <label className="dropdown-item">Role:{role}</label>

            <Link to="/profile_edit" className="dropdown-item">
              Edit Profile
                <i className="fa fa-edit" style={{ float: 'right', paddingTop: 4 }}></i>
            </Link>

            <div className="dropdown-divider"></div>
            <Link to="/Login" className="dropdown-item">
              Logout
                <i className="fa fa-sign-out" style={{ float: 'right', paddingTop: 4 }}></i>
            </Link>
          </div>
        </li>
      </ul>
    </div>
  )
}


export default Navbar;