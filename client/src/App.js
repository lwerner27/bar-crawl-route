import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import AppNav from "./components/AppNav"
import Login from "./pages/Login"
import Register from './pages/Register';
import CreateRoute from './pages/CreateRoute';


class App extends Component {

  constructor(props) {
    super(props) 
    this.state = {
      userId: null,
      username: null,
      jwt: null
    }
    this.UPDATE_USER_INFO = this.UPDATE_USER_INFO.bind(this)
  }

  UPDATE_USER_INFO(userInfo) {
    this.setState(userInfo)
  }

  render() {
    return (
      <div className="App">
        <AppNav />
        <Router>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/create/route" component={CreateRoute} />
        </Router>
      </div>
    );
  }
}

export default App;
