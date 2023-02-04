import React from "react";
import { useAuth } from "./auth";

function Profile() {
  const auth = useAuth()

  return (
    <>
      <div className="contain-profile">
        <div className="contain-profile__image"></div>
        <div className="contain-profile__header">
          <h1>Profile</h1>
          <p><strong>Welcome: </strong>{auth.user.user}</p>
        </div>
      </div>
    </>
  )
}

export {Profile}