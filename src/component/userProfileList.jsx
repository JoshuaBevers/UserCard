import React from "react";
import UserProfile from "./userProfileList";

const UserProfileList = props => {
  const { userData } = props;
  return (
    <h1>
      No more failure!
      {userData.length > 0 ? (
        userData.map(user => {
          // Map function to return a child component for each user in the array.
          // We will use the unique number that comes with the JSON user object.
          return (
            <ul key={user.login.uuid}>
              <li>
                {/* User profile seems to have having an issue running out of bounds? It loses the ability to see length. */}
                {console.log(user)}
                <UserProfile userProfile={user} />
              </li>
            </ul>
          );
        })
      ) : (
        <p> You got jack in that ternary, bud.</p>
      )}
    </h1>
  );
};

export default UserProfileList;
