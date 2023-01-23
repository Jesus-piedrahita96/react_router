import React from "react";
import { useAuth } from "./auth";

function Profile() {
  const auth = useAuth()

  return (
    <>
      <h1>Profile</h1>
    {  console.log(auth.user)}
      <p>{`Welcome: ${auth.user.user}`}</p>
    </>
  )
}

export {Profile}