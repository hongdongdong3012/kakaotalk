import React from "react";
import TopMenu from "./Component/TopMenu";
import Footer from "./Component/Footer";
import Profile from "./Component/Profile";
import "./App.css";
import Massage from "./Screens/Massage";

function App() {
  return (
    <div>
      <TopMenu />
      <Profile />
      {/* <Massage /> */}
      <Footer />
    </div>
  );
}

export default App;
