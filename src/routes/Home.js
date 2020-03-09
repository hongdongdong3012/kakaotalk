import React, { Component } from "react"; //Proflier hide
import TopMenu from "../Component/TopMenu";
import Profile from "../Component/Profile";
import "./Home.css";

class Home extends Component {
  render() {
    return (
      <div>
        <TopMenu />
        <TopMenu name="친구" />

        <Profile />
      </div>
    );
  }
}

export default Home;
