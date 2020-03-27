import React, { Component } from "react";

export default class UserProfile extends Component {
  constructor(props) {
    super();
  }
  render() {
    return (
      <div>
        <img src={this.state.picture} alt=""></img>
        <h1>
          Welcome: {this.state.firstName} {this.state.lastName} <br></br>
        </h1>
        <h2>your contact information is:</h2>
        <h4>phone: {this.state.phone}</h4>
        <h4>cell: {this.state.cell}</h4>
        <h4>Email: {this.state.email}</h4>
      </div>
    );
  }
}
