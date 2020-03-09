import React, { Component } from "react";
import "./TopMenu.css";

class TopMenu extends Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timeId = setInterval(() => this.Change(), 1000);
  }

  componentWillMount() {
    clearInterval(this.timeId);
  }

  Change = () => {
    this.setState({
      date: new Date()
    });
  };
  render() {
    return (
      <div className="menu">
        <div className="fullMenu">
          <div className="time">
            {this.state.date.getHours() < 10
              ? `0${this.state.date.getHours()}`
              : this.state.date.getHours()}
            :
            {this.state.date.getMinutes() < 10
              ? `0${this.state.date.getMinutes()}`
              : this.state.date.getMinutes()}
          </div>
          <div className="status-bar_column">
            <i className="fas fa-signal"></i>
            <i className="fas fa-wifi"></i>
            <i className="fas fa-battery-full"></i>
          </div>
        </div>
        <div className="friend">
          <div className="myFriend">친구</div>
          <div>
            <span className="header_icon">
              <i className="fas fa-search"></i>
            </span>

            <span className="header_icon">
              <i className="fas fa-cog"></i>
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default TopMenu;
