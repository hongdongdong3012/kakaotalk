import React, { Component } from "react";
import TopMenu from "../Component/TopMenu";
import Massage from "../Component/Massage";

class Chatting extends Component {
  render() {
    return (
      <div>
        <TopMenu />
        <TopMenu name="채팅" />
        <Massage />
      </div>
    );
  }
}

export default Chatting;
