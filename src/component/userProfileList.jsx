import React from "react";
import UserProfile from "./userProfileList";

const UserProfileList = props => {
  const { userData } = props; //grab data from app.js
  return (
    //need a map function.
    <h1>
      failure!
      {userData.length > 0 ? (
        userData.map(users => {
          return <h1>Ya filthy demon!</h1>;
        })
      ) : (
        <p> You got jack in that ternary, bud.</p>
      )}
    </h1>
  );
};

export default UserProfileList;
