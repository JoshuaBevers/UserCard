import React, { Component } from "react";

class UserCard extends Component {
  state = {
    gender: null,
    name: null,
    location: null,
    email: null,
    login: null,
    dob: null,
    registered: null,
    phone: null,
    cell: null,
    id: null,
    picture: null,
    nat: null
  };

  deconstruct = async object => {
    console.log("the receieved object is; ", object);
    let personArray = [];
    const person = object.map(object => {
      const {
        gender,
        name,
        location,
        email,
        login,
        dob,
        registered,
        phone,
        cell,
        id,
        picture,
        nat
      } = object;
    });

    console.log("person is: ", person);

    return person;
  };

  async componentDidMount() {
    console.log("the quote component was mounted in JS.");
    try {
      const response = await fetch(`https://randomuser.me/api/`);
      const data = await response.json();
      console.log("Data results are: ", data.results[0]);
      //   const people = data.results;  this will be used for when we handle multiple users.
      //   const personReturned = await this.deconstruct(people);
      const {
        gender,
        name,
        location,
        email,
        login,
        dob,
        registered,
        phone,
        cell,
        id,
        picture,
        nat
      } = data.results[0];
      //   this.setState({ quote: data });
    } catch (e) {
      console.log(e.message);
      this.setState({ quote: e.message });
      return e;
    }
  }
  render() {
    return <h1>This returned</h1>;
  }
}
export default UserCard;
