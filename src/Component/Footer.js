import React, { Component } from "react";
import "./Footer.css";

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <nav className="nav">
          <ul className="nav_list">
            <li className="nav_list-item">
              <i className="fas fa-user"></i>
            </li>
            <li className="nav_list-item">
              <i className="far fa-comment"></i>
            </li>
            <li className="nav_list-item">
              <i className="fas fa-search"></i>
            </li>
            <li className="nav_list-item">
              <i className="fas fa-ellipsis-h"></i>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Footer;
