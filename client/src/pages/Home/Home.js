import React, { Component } from "react";
import API from "../../utils/API";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Home.scss";

class Home extends Component {
  state = {
    loggedIn: false,
    
  };

  

  loggedIn = () => {
    API.isLoggedIn()
      .then(user => {
        if (user.data.loggedIn) {
          this.setState({
            loggedIn: true
          });
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div className="homeBox">
        <h3>Welcome</h3>
        
      </div>
    );
  }
}

export default Home;
