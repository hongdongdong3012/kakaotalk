import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import "./Footer.css";

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <nav className="nav">
          <ul className="nav_list">
            <li className="nav_list-item">
              <Link to="/">
                <i className="fas fa-user"></i>
              </Link>
            </li>
            <li className="nav_list-item">
              <Link to="Chatting">
                <i className="far fa-comment"></i>
              </Link>
            </li>
            <li className="nav_list-item">
              <Link to="Search">
                <i className="fas fa-hashtag"></i>
              </Link>
            </li>
            <li className="nav_list-item">
              <Link to="About">
                <i className="fas fa-ellipsis-h"></i>
              </Link>
              <Route path="/:title" />
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Footer;
