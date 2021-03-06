import React, { Component } from "react";

class UserCard extends Component {
  state = {
    gender: null,
    firstName: null,
    lastName: null,
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

  getData = async () => {
    try {
      const response = await fetch(`https://randomuser.me/api/`);
      const data = await response.json();

      return data;
    } catch (e) {
      console.log(e.message);
      this.setState({ quote: e.message });
      return e;
    }
  };

  //   deconstruct = async object => {
  //     console.log("the receieved object is; ", object);
  //     let personArray = [];
  //     const person = object.map(object => {
  //       const {
  //         gender,
  //         firstName,
  //         lastName,
  //         location,
  //         email,
  //         login,
  //         dob,
  //         registered,
  //         phone,
  //         cell,
  //         id,
  //         picture,
  //         nat
  //       } = object;
  //     });

  //     console.log("person is: ", person);

  //     return person;
  //   };

  async componentDidMount() {
    console.log("the quote component was mounted in JS.");
    try {
      const data = await this.getData();
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
      this.setState({
        gender: gender,
        firstName: name.first,
        lastName: name.last,
        email: email,
        phone: phone,
        cell: cell,
        nat: nat,
        picture: picture.small
      });
    } catch (e) {
      console.log(e.message);
      this.setState({ quote: e.message });
      return e;
    }
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
        <h4>cell: {this.state.email}</h4>
      </div>
    );
  }
}
export default UserCard;
