import React from "react";
import { useAuth } from "./auth";

function Profile() {
  const auth = useAuth()

  return (
    <>
      <h1>Profile</h1>
      <p>{`Welcome: ${auth.user}`}</p>
    </>
  )
}

export {Profile}