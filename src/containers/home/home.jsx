import React, { Component } from "react";
import Jumbotron from "../../components/jumbotron/index";
import Navbar from "../../components/navbar";
export default class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Jumbotron />
      </div>
    );
  }
}
