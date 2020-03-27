import React, { Component } from "react";
import "./App.css";
import UserProfileList from "./component/userProfileList";

export default class App extends Component {
  state = {
    users: [] //still annoys me that I can't type things.
  };

  getUsers = async url => {
    const newUserArray = await fetch(url);
    const Data = await newUserArray.json(); //converts it to juicy data because randomuser don't play.
    return Data.results;
  };

  async componentDidMount() {
    const UserData = await this.getUsers(
      `https://randomuser.me/api/?results=3`
    ); //not necessary, but keeping this in mind in case I wish to change the result number later on.

    this.setState({
      users: UserData
    });
  }

  render() {
    return (
      <div>
        <h1>Love me some cannons!</h1>
        <UserProfileList userData={this.state.users} />
      </div>
    );
  }
}
