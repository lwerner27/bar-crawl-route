import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import AppNav from "./components/AppNav"
import Login from "./pages/Login"


class App extends Component {

  render() {
    return (
      <div className="App">
        <AppNav />
        <Router>
          <Route to="/login" component={Login} />
        </Router>
      </div>
    );
  }
}

export default App;
