import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  const [toggled, setToggled] = useState(false);

  const handleToggle = () => {
    const newToggleState = !toggled;
    setToggled(newToggleState);
    if (newToggleState) {
      document.body.classList.add('sidebar-collapsed');
    } else {
      document.body.classList.remove('sidebar-collapsed');
    }
  };

  return (
    <div id="wrapper" className={toggled ? 'toggled' : ''}>
      {/* Sidebar */}
      <div id="sidebar-wrapper">
        <ul className="sidebar-nav">
          <li className="sidebar-brand">
            <a href="#menu-toggle" id="menu-toggle" onClick={handleToggle}>
              <i className="fa fa-bars"></i>
            </a>
          </li>
          {/* Sidebar Links */}
          <li>
            <Link to="/dashboard">
              <i className="fa fa-tachometer" aria-hidden="true"></i>
              <span style={{ marginLeft: 10 }}>Dashboard</span>
            </Link>
          </li>
          <li>
            <Link to="/profile">
              <i className="fa fa-users" aria-hidden="true"></i>
              <span style={{ marginLeft: 10 }}>Team Profile</span>
            </Link>
          </li>
          <li>
            <Link to="/metrics">
              <i className="fa fa-line-chart" aria-hidden="true"></i>
              <span style={{ marginLeft: 10 }}>Metrics</span>
            </Link>
          </li>
          <li>
            <Link to="/alerts">
              <i className="fa fa-bell" aria-hidden="true"></i>
              <span style={{ marginLeft: 10 }}>Alerts</span>
            </Link>
          </li>
          <li>
            <Link to="/about">
              <i className="fa fa-info-circle" aria-hidden="true"></i>
              <span style={{ marginLeft: 10 }}>About</span>
            </Link>
          </li>
          <li>
            <Link to="/contact">
              <i className="fa fa-envelope" aria-hidden="true"></i>
              <span style={{ marginLeft: 10 }}>Contact</span>
            </Link>
          </li>
        </ul>
      </div>

      {/* Page Content Wrapper */}
      <div id="page-content-wrapper">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <Link to="/" className="site-title">
                <h2>SDN for IoT</h2>
              </Link>
              <hr />
              {/* Konten halaman disesuaikan dengan route */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
