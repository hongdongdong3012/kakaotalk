import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./routes/Home";
import Chatting from "./routes/Chatting";
import Footer from "./Component/Footer";
import Search from "./routes/Search";
import About from "./routes/About";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          {/* <TopMenu />
      <Profile />
      <Footer /> */}
          <div>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/chatting" component={Chatting} />
              <Route path="/search" component={Search} />
              <Route path="/about" component={About} />
            </Switch>
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
